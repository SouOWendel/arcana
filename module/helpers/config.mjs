export const ARC = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
ARC.abilities = {
  aura: 'ARC.Ability.Aura.long',
  dext: 'ARC.Ability.Dext.long',
  inte: 'ARC.Ability.Inte.long',
  stre: 'ARC.Ability.Stre.long',
  tena: 'ARC.Ability.Tena.long',
};

ARC.abilityAbbreviations = {
  aura: 'ARC.Ability.Aura.abbr',
  dext: 'ARC.Ability.Dext.abbr',
  inte: 'ARC.Ability.Inte.abbr',
  stre: 'ARC.Ability.Stre.abbr',
  tena: 'ARC.Ability.Tena.abbr',
};

ARC.skills = {
    acrobatics: { label: 'ARC.Skill.acrobatics', abl: 'dext' },
    animalHandling: { label: 'ARC.Skill.animalHandling', abl: 'aura' },
    arcanism: { label: 'ARC.Skill.arcanism', abl: 'inte' },
    arts: { label: 'ARC.Skill.arts', abl: 'aura' },
    athletics: { label: 'ARC.Skill.athletics', abl: 'stre' },
    sciences: { label: 'ARC.Skill.sciences', abl: 'inte' },
    knowledge: { label: 'ARC.Skill.knowledge', abl: 'inte' },
    determination: { label: 'ARC.Skill.determination', abl: 'aura' },
    diplomacy: { label: 'ARC.Skill.diplomacy', abl: 'aura' },
    deception: { label: 'ARC.Skill.deception', abl: 'aura' },
    fortitude: { label: 'ARC.Skill.fortitude', abl: 'tena' },
    stealth: { label: 'ARC.Skill.stealth', abl: 'dext' },
    initiative: { label: 'ARC.Skill.initiative', abl: 'dext' },
    intimidation: { label: 'ARC.Skill.intimidation', abl: 'aura' },
    intuition: { label: 'ARC.Skill.intuition', abl: 'aura' },
    investigation: { label: 'ARC.Skill.investigation', abl: 'inte' },
    thievery: { label: 'ARC.Skill.thievery', abl: 'dext' },
    fight: { label: 'ARC.Skill.fight', abl: 'stre' },
    medicine: { label: 'ARC.Skill.medicine', abl: 'inte' },
    craft: { label: 'ARC.Skill.craft', abl: 'inte' },
    perception: { label: 'ARC.Skill.perception', abl: 'aura' },
    piloting: { label: 'ARC.Skill.piloting', abl: 'dext' },
    marksmanship: { label: 'ARC.Skill.marksmanship', abl: 'dext' },
    reflexes: { label: 'ARC.Skill.reflexes', abl: 'dext' },
    religion: { label: 'ARC.Skill.religion', abl: 'aura' },
    survival: { label: 'ARC.Skill.survival', abl: 'inte' },
    tactics: { label: 'ARC.Skill.tactics', abl: 'inte' },
    technology: { label: 'ARC.Skill.technology', abl: 'inte' }
};