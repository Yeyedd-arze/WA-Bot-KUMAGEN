const { Router, Response } = require("pepesan");
const BotController = require("./controller/BotController");
const f = require("./utils/Formatter");

const router = new Router();

router.menu(f("menu.materiStunting"), [BotController, "stunting"]);
router.menu(f("menu.materiKespro"), [BotController, "kespro"]);
router.menu(f("menu.reproduksiL"), [BotController, "repL"]);
router.menu(f("menu.reproduksiP"), [BotController, "repP"]);
router.menu(f("menu.pubertas"), [BotController, "puber"]);
router.menu(f("menu.menstruasi"), [BotController, "menstruasi"]);
router.menu(f("menu.materiRemaja"), [BotController, "remaja"]);
router.menu(f("menu.materiTransisi"), [BotController, "transisi"]);
router.menu(f("menu.materiFungsi"), [BotController, "fungsi"]);
router.menu(f("menu.materiPUP"), [BotController, "PUP"]);
router.menu(f("menu.materiHormon"), [BotController, "hormon"]);
router.menu(f("menu.materiHIV"), [BotController, "hiv"]);
router.menu(f("menu.materiAnemia"), [BotController, "anemia"]);
router.menu(f("menu.materiBullying"), [BotController, "bully"]);
router.menu(f("menu.materiStunting"), [BotController, "stunting"]);
router.menu(f("menu.materiDemografi"), [BotController, "demografi"]);
router.menu(f("menu.materiNikahdini"), [BotController, "nikah"]);
router.menu(f("menu.materiSeks"), [BotController, "sex"]);
router.menu(f("menu.materiNapza"), [BotController, "napza"]);
router.keyword("pikr", [BotController, "pikr"]);
router.keyword("profil pembuat", [BotController, "jayet"]);
router.keyword("genre", [BotController, "genre"]);
router.keyword("materi", [BotController, "materi"]);
router.keyword("*", [BotController, "introduction"]);

module.exports = router;