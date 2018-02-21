//Global
	var i;

//Effect Tooltips
    //Boon Variables
    var Aegis = document.getElementsByClassName("tooltip-Aegis");
    effectTooltips(Aegis, 'Aegis');
    var Alacrity = document.getElementsByClassName("tooltip-Alacrity");
    effectTooltips(Alacrity, 'Alacrity');
    var Fury = document.getElementsByClassName("tooltip-Fury");
    effectTooltips(Fury, 'Fury');
    var Might = document.getElementsByClassName("tooltip-Might");
    effectTooltips(Might, 'Might');
    var Protection = document.getElementsByClassName("tooltip-Protection");
    effectTooltips(Protection, 'Protection');
    var Fury = document.getElementsByClassName("tooltip-Fury");
    effectTooltips(Fury, 'Fury');
    var Might = document.getElementsByClassName("tooltip-Might");
    effectTooltips(Might, 'Might');
    var Protection = document.getElementsByClassName("tooltip-Protection");
    effectTooltips(Protection, 'Protection');
    var Quickness = document.getElementsByClassName("tooltip-Quickness");
    effectTooltips(Quickness, 'Quickness');
    var Regeneration = document.getElementsByClassName("tooltip-Regeneration");
    effectTooltips(Regeneration, 'Regeneration');
    var Resistance = document.getElementsByClassName("tooltip-Resistance");
    effectTooltips(Resistance, 'Resistance');
    var Retaliation = document.getElementsByClassName("tooltip-Retaliation");
    effectTooltips(Retaliation, 'Retaliation');
    var Stability = document.getElementsByClassName("tooltip-Stability");
    effectTooltips(Stability, 'Stability');
    var Swiftness = document.getElementsByClassName("tooltip-Swiftness");
    effectTooltips(Swiftness, 'Swiftness');
    var Vigor = document.getElementsByClassName("tooltip-Vigor");
    effectTooltips(Vigor, 'Vigor');
    //Effects
    var Stun = document.getElementsByClassName("tooltip-Stun");
    effectTooltips(Stun, 'Stun');
    var Daze = document.getElementsByClassName("tooltip-Daze");
    effectTooltips(Daze, 'Daze');
    var Knockdown = document.getElementsByClassName("tooltip-Knockdown");
    effectTooltips(Knockdown, 'Knockdown');
    var Knockback = document.getElementsByClassName("tooltip-Knockback");
    effectTooltips(Knockback, 'Knockback');
    var Pull = document.getElementsByClassName("tooltip-Pull");
    effectTooltips(Pull, 'Pull');
    var Launch = document.getElementsByClassName("tooltip-Launch");
    effectTooltips(Launch, 'Launch');
    var Sink = document.getElementsByClassName("tooltip-Sink");
    effectTooltips(Sink, 'Sink');
    var Float = document.getElementsByClassName("tooltip-Float");
    effectTooltips(Float, 'Float');
    var Invulnerability = document.getElementsByClassName("tooltip-Invulnerability");
    effectTooltips(Invulnerability, 'Invulnerability');
    var Stealth = document.getElementsByClassName("tooltip-Stealth");
    effectTooltips(Stealth, 'Stealth');
    var Revealed = document.getElementsByClassName("tooltip-Revealed");
    effectTooltips(Revealed, 'Revealed');
    var Nourishment = document.getElementsByClassName("tooltip-Nourishment");
    effectTooltips(Nourishment, 'Nourishment');
    var Enhancement = document.getElementsByClassName("tooltip-Enhancement");
    effectTooltips(Enhancement, 'Enhancement');
    //Conditions
    var Bleeding = document.getElementsByClassName("tooltip-Bleeding");
    effectTooltips(Bleeding, 'Bleeding');
    var Burning = document.getElementsByClassName("tooltip-Burning");
    effectTooltips(Burning, 'Burning');
    var Confusion = document.getElementsByClassName("tooltip-Confusion");
    effectTooltips(Confusion, 'Confusion');
    var Poison = document.getElementsByClassName("tooltip-Poison");
    effectTooltips(Poison, 'Poison');
    var Torment = document.getElementsByClassName("tooltip-Torment");
    effectTooltips(Torment, 'Torment');
    var Blind = document.getElementsByClassName("tooltip-Blind");
    effectTooltips(Blind, 'Blind');
    var Chilled = document.getElementsByClassName("tooltip-Chilled");
    effectTooltips(Chilled, 'Chilled');
    var Crippled = document.getElementsByClassName("tooltip-Crippled");
    effectTooltips(Crippled, 'Crippled');
    var Fear = document.getElementsByClassName("tooltip-Fear");
    effectTooltips(Fear, 'Fear');
    var Immobile = document.getElementsByClassName("tooltip-Immobile");
    effectTooltips(Immobile, 'Immobile');
    var Slow = document.getElementsByClassName("tooltip-Slow");
    effectTooltips(Slow, 'Slow');
    var Taunt = document.getElementsByClassName("tooltip-Taunt");
    effectTooltips(Taunt, 'Taunt');
    var Weakness = document.getElementsByClassName("tooltip-Weakness");
    effectTooltips(Weakness, 'Weakness');
    var Vulnerability = document.getElementsByClassName("tooltip-Vulnerability");
    effectTooltips(Vulnerability, 'Vulnerability');
    //ProfessionBuffs
    var Spotter = document.getElementsByClassName("tooltip-Spotter");
    effectTooltips(Spotter, 'Spotter');
    var FrostSpirit = document.getElementsByClassName("tooltip-FrostSpirit");
    effectTooltips(FrostSpirit, 'Frost_Spirit');
    var SunSpirit = document.getElementsByClassName("tooltip-SunSpirit");
    effectTooltips(SunSpirit, 'Sun_Spirit');
    var StoneSpirit = document.getElementsByClassName("tooltip-StoneSpirit");
    effectTooltips(StoneSpirit, 'Stone_Spirit');
    var StormSpirit = document.getElementsByClassName("tooltip-StormSpirit");
    effectTooltips(StormSpirit, 'Storm_Spirit');
    var EmpowerAllies = document.getElementsByClassName("tooltip-EmpowerAllies");
    effectTooltips(EmpowerAllies, 'Empower_Allies');
    var BannerOfStrength = document.getElementsByClassName("tooltip-BannerOfStrength");
    effectTooltips(BannerOfStrength, 'Banner_of_Strength');
    var BannerOfDiscipline = document.getElementsByClassName("tooltip-BannerOfDiscipline");
    effectTooltips(BannerOfDiscipline, 'Banner_of_Discipline');
    var AssassinsPresence = document.getElementsByClassName("tooltip-AssassinsPresence");
    effectTooltips(AssassinsPresence, 'Assassins_Presence');
    var PinpointDistribution = document.getElementsByClassName("tooltip-PinpointDistribution");
    effectTooltips(PinpointDistribution, 'Pinpoint_Distribution');
    var VampiricPresence = document.getElementsByClassName("tooltip-VampiricPresence");
    effectTooltips(VampiricPresence, 'Vampiric_Presence');
    var StrengthInNumbers = document.getElementsByClassName("tooltip-StrengthInNumbers");
    effectTooltips(StrengthInNumbers, 'Strength_in_Numbers');
    var Portal = document.getElementsByClassName("tooltip-Portal");
    effectTooltips(Portal, 'Portal');
//Role Tooltips
    //Utility
    var ChronoTank = document.getElementsByClassName("tooltip-role-ChronoTank");
    professionTooltips(ChronoTank, 'Chronomancer', 'Tank');
    var ChronoUtility = document.getElementsByClassName("tooltip-role-ChronoUtility");
    professionTooltips(ChronoUtility, 'Chronomancer', 'Utility');
    var RenegadeSupport = document.getElementsByClassName("tooltip-role-RenegadeSupport");
    professionTooltips(RenegadeSupport, 'Renegade', 'Utility', 'Support');
    var HeraldKiter = document.getElementsByClassName("tooltip-role-HeraldKiter");
    professionTooltips(HeraldKiter, 'Herald', 'Utility', 'Handkiter');
    var Bannerslave = document.getElementsByClassName("tooltip-role-Bannerslave");
    professionTooltips(Bannerslave, 'Berserker', 'Condi', 'Banners');
    //Healer
    var DruidHealer = document.getElementsByClassName("tooltip-role-DruidHealer");
    professionTooltips(DruidHealer, 'Druid', 'Healer');
    var DruidCondi = document.getElementsByClassName("tooltip-role-DruidCondi");
    professionTooltips(DruidCondi, 'Druid', 'Condi', 'Healer');
    var DruidPower = document.getElementsByClassName("tooltip-role-DruidPower");
    professionTooltips(DruidPower, 'Druid', 'Power', 'Healer');
    var TempestHealer = document.getElementsByClassName("tooltip-role-TempestHealer");
    professionTooltips(TempestHealer, 'Tempest', 'Healer');
    //Condi
    var BerserkerCondi = document.getElementsByClassName("tooltip-role-BerserkerCondi");
    professionTooltips(BerserkerCondi, 'Berserker', 'Condi');
    var FirebrandCondi = document.getElementsByClassName("tooltip-role-FirebrandCondi");
    professionTooltips(FirebrandCondi, 'Firebrand', 'Condi');
    var EngineerCondi = document.getElementsByClassName("tooltip-role-EngineerCondi");
    professionTooltips(EngineerCondi, 'Engineer', 'Condi');
    var DaredevilCondi = document.getElementsByClassName("tooltip-role-DaredevilCondi");
    professionTooltips(DaredevilCondi, 'Daredevil', 'Condi');
    var MirageCondi = document.getElementsByClassName("tooltip-role-MirageCondi");
    professionTooltips(MirageCondi, 'Mirage', 'Condi');
    var RenegadeCondi = document.getElementsByClassName("tooltip-role-RenegadeCondi");
    professionTooltips(RenegadeCondi, 'Renegade', 'Condi');
    var ScourgeCondi = document.getElementsByClassName("tooltip-role-ScourgeCondi");
    professionTooltips(ScourgeCondi, 'Scourge', 'Condi');
    var SoulbeastCondi = document.getElementsByClassName("tooltip-role-SoulbeastCondi");
    professionTooltips(SoulbeastCondi, 'Soulbeast', 'Condi');
    //Power
    var SpellbreakerPower = document.getElementsByClassName("tooltip-role-SpellbreakerPower");
    professionTooltips(SpellbreakerPower, 'Spellbreaker', 'Power');
    var WeaverPower = document.getElementsByClassName("tooltip-role-WeaverPower");
    professionTooltips(WeaverPower, 'Weaver', 'Power');
    var DragonhunterPower = document.getElementsByClassName("tooltip-role-DragonhunterPower");
    professionTooltips(DragonhunterPower, 'Dragonhunter', 'Power');
    var HolosmithPower = document.getElementsByClassName("tooltip-role-HolosmithPower");
    professionTooltips(HolosmithPower, 'Holosmith', 'Power');
    var DaredevilPower = document.getElementsByClassName("tooltip-role-DaredevilPower");
    professionTooltips(DaredevilPower, 'Daredevil', 'Power');
    var ChronomancerPower = document.getElementsByClassName("tooltip-role-ChronomancerPower");
    professionTooltips(ChronomancerPower, 'Spellbreaker', 'Power');



//Tooltip Generation
    function effectTooltips(tooltip, effect) {
        var effectName = effect.replace(/_/g, " ");
        for (i = 0; i < tooltip.length; i++) {
            tooltip[i].innerHTML = '<img class="icon-effect tooltipped" data-position="top" data-delay="50" data-tooltip=\'<img class="icon-effect" src="assets/Effects/' + effect + '.png"> ' + effectName + '\' class="icon-effect" src="assets/Effects/' + effect + '.png">';
            tooltip[i].href = "https://wiki.guildwars2.com/wiki/" + effect;
            tooltip[i].setAttribute('target', '_blank');
        };
    }

    function professionTooltips(tooltip, profession, roleIcon, roleName) {
        for (i = 0; i < tooltip.length; i++) {
            if (!roleName) {
                var roleName = roleIcon;
            }
            tooltip[i].innerHTML = '<span class="tooltipped" data-position="top" data-delay="50" data-tooltip=\'<img class="icon-class" src="assets/Icons/' + profession + '.png"><img class="icon-role" src="assets/Icons/' + roleIcon + '.png">' + profession + ' (' + roleName + ')' + '\'><img class="icon-class" src="assets/Icons/' + profession + '.png"><img class="icon-role" src="assets/Icons/' + roleIcon + '.png"></span>';
        };
    }