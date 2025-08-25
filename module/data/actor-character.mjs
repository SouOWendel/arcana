import arcanaActorBase from './base-actor.mjs';

export default class arcanaCharacter extends arcanaActorBase {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    'ARC.Actor.Character',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.attributes = new fields.SchemaField({
      level: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 1 }),
      }),
    });

    // Iterate over ability names and create a new SchemaField for each.
    schema.abilities = new fields.SchemaField(
      Object.keys(CONFIG.ARC.abilities).reduce((obj, ability) => {
        obj[ability] = new fields.SchemaField({
          value: new fields.NumberField({
            ...requiredInteger,
            initial: 1,
            min: 0,
          }),
        });
        return obj;
      }, {})
    );

		schema.skills = new fields.SchemaField(
      Object.keys(CONFIG.ARC.skills).reduce((obj, skill) => {
        obj[skill] = new fields.SchemaField({
          value: new fields.NumberField({
            ...requiredInteger,
            initial: 1,
            min: 0,
          }),
					trained: new fields.BooleanField()
        });
        return obj;
      }, {})
    );

    return schema;
  }

  prepareDerivedData() {
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (const key in this.abilities) {
      // Calculate the modifier using d20 rules.
      this.abilities[key].mod = 0;
      // Handle ability label localization.
      this.abilities[key].label =
        game.i18n.localize(CONFIG.ARC.abilities[key]) ?? key;
    }
		
		for (const key in this.skills) {
			this.skills[key].label =
        game.i18n.localize(CONFIG.ARC.skills[key].label) ?? key;

			this.skills[key].abl = CONFIG.ARC.skills[key].abl;

			this.skills[key].mod = 
				(Math.floor((this.attributes.level.value) / 2) +
				this.calculateTrainedSkills(this.skills[key], this.attributes.level.value) +
				this.abilities[this.skills[key].abl].value
      );
		}
  }

	calculateTrainedSkills(skill, level) {
		if(!skill.trained) return 0;
		if(level >= 15) return 6;
		else if (level >= 7) return 4;
		else return 2;
	}

  getRollData() {
    const data = {};

    // Copy the ability scores to the top level, so that rolls can use
    // formulas like `@str.mod + 4`.
    if (this.abilities) {
      for (let [k, v] of Object.entries(this.abilities)) {
        data[k] = foundry.utils.deepClone(v);
      }
    }

    data.lvl = this.attributes.level.value;

    return data;
  }
}
