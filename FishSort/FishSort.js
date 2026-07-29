var selectFish = 0
var selectGroup = 0

const fish1 = [
    'https://static.wixstatic.com/media/a946bc_4b4c97eb1f0b4173b4f66a536d4a7db6~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BandedButterflyFish_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_6a9b04592d6648fa953da8d911a9d37f~mv2.png/v1/fill/w_636,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bar%20Jack_A_Perrus.png',
    'https://static.wixstatic.com/media/a946bc_3838710db3694993b4938cdb447f11be~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bicolour_Damselfish_2_C_Walter.jpg',
    'https://static.wixstatic.com/media/a946bc_002c7488f51e47358cc619d3e7749567~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BlackBarSoldierFish_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_8f5d187314794279bfd993e15e1732ca~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Blenny_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_68bc5bddf6384de8979a07ad89a9e957~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Blue%20Chromis_I_Popo.jpg',
    'https://static.wixstatic.com/media/a946bc_b8826bb321d24844a7cf7ec1477411d7~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/BlueTang_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_4e1c1617a9144c16aa78d49739920af1~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bluehead_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_711ecbba7cb74017b5839dddd007b545~mv2.png/v1/fill/w_636,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/SquirrelFish_M_Navarro.png',
    'https://static.wixstatic.com/media/a946bc_875c9a975a554215ab57fa520febda45~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/southernstingray_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_58db14d7cf664c0cab75aca4237a1fa9~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Colon%20Goby_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_30b5c68c4a2e4f7d9bd7ab15ef5ca3c6~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Coney_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_962c6a535f1144f2a9d842aeaabb34bf~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Coral%20Hind_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_f1c52094d6ad4bc89578b32c6decf877~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Damselfish_S_Walters.jpg',
    'https://static.wixstatic.com/media/a946bc_30a6a3168bc64949a961202046145d8c~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Foureye_Butterflyfish_C_Walter.jpg']

const fish2 = [
    'https://static.wixstatic.com/media/a946bc_a3c6f5b95d5b4410842c9432f594a20b~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FrenchGrunts_S_Walters.jpg',
    'https://static.wixstatic.com/media/a946bc_f40abdcf52f244a9a32e1101e451e5de~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Goby2_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_9706660a633f45b0b7213fd1aaf108da~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gray%20Chromis_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_bf7a8e87210e4567a22dcf4a3a9ebd42~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/HarlequinBass_C_Walter.jpg',
    'https://static.wixstatic.com/media/a946bc_5f618506697f496db71dc39b9e4705d6~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Highat_I_Popo.jpg',
    'https://static.wixstatic.com/media/a946bc_1b0fd3ed3d4c4061b1ba639f3141c0c3~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Juv_Beaugregory_C_Walter.jpg',
    'https://static.wixstatic.com/media/a946bc_7f072443987148e89c59746aa3a2abc7~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Juvenile%20French%20Angel%20Fish2_I_Popo.jpg',
    'https://static.wixstatic.com/media/a946bc_c1fb566c67d24c4eae013410f11aab1f~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Juvenile%20Lane%20snapper_I_Popo.jpg',
    'https://static.wixstatic.com/media/a946bc_bdf0b7818ba145aa9292a11e4f1c31bf~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/JuvenilleDrumFish_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_03499f7af027485a84a57050a45fea22~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Lion%20Fish_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_9a8c1adeb09344c2aea9b114a3511242~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Juvenile%20Lionfish_I_Popo.jpg',
    'https://static.wixstatic.com/media/a946bc_2d7091a5a9b34029bcba1ab5754ccf6a~mv2.png/v1/fill/w_636,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Orange%20Spotted%20Filefish2_A_Perrus.png',
    'https://static.wixstatic.com/media/a946bc_f63e0688186c4a4b8a755ee9d3d2b567~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Peacock_Flounder_M_%20Navarro(3).jpg',
    'https://static.wixstatic.com/media/a946bc_f154370532e941a6a83cc8713c51d242~mv2.png/v1/fill/w_636,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Porcupinefish_I_Popo.png',
    'https://static.wixstatic.com/media/a946bc_2dc23300c0e24826b506735ab8f63c96~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Puddingwife_A_Perrus.jpg']

const fish3 = [
    'https://static.wixstatic.com/media/a946bc_36017bd9b6ea4346aa16d01b249ceab1~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Queen%20Triggerfish_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_23098f09b1d24ad8b9f40d000a0b8142~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Red%20Hind_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_206f285d996c4dcb933718a0c66244ef~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Red%20Spotted%20Hawkfish_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_9dc851d31cd04f9aafb4598c01a332aa~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Redband%20Parrotfish_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_3e2b43ac21ee4b758d1f5c3f5233deb9~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rock%20Hind_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_fa726c0387ff4aa89fb7b63a301d1fe5~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sand_Tilefish_C_Walter.jpg',
    'https://static.wixstatic.com/media/a946bc_79623a3e9e07420da0beb50a287653d6~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ScorpionFish_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_1fd17fca50e74c76acc9a810841bc16b~mv2.png/v1/fill/w_636,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Scrawled%20Filefish_M_Navarro.png',
    'https://static.wixstatic.com/media/a946bc_9951416119de46869cf7eb8bc28d6ef9~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Slippery%20Dick%20Fish_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_b717ff51621044faaa0ff2750805c6db~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SmoothPufferFish_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_e7a1353323e442f38494f823096643c2~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Spanish%20Hogfish_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_f8a4fb9172c9445686353fc89dfa174c~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SpinyHeadBlenny_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_2b4d8cada187401a90ef6d387d68125b~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SpotfinButterfly_S_Walters.jpg',
    'https://static.wixstatic.com/media/a946bc_c2bf1886e1e74912a4738652ea980c3e~mv2.png/v1/fill/w_636,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/SpottedGoatFish_M_Navarro.png',
    'https://static.wixstatic.com/media/a946bc_cb8a0f294b5d4100b9baff522222330d~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Stoplight%20Parrotfish_A_Perrus.jpg']

const fish4 = [
    'https://static.wixstatic.com/media/a946bc_506fdcfadedc408895264bc9cf01ed55~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Striped%20Parrotfish_A_edited.jpg',
    'https://static.wixstatic.com/media/a946bc_c7ff1d497d2d4c58aa1f68ffb6308062~mv2.png/v1/fill/w_636,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/TrunkFish_M_Navarro(2).png',
    'https://static.wixstatic.com/media/a946bc_40bae27de17148cb8dadd871f185c31d~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Whitespotted%20Filefish_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_734270b43667416d89eb1b888cd22ae2~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/YellowTailSnapper_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_793c272b7c024253a4051a182680ef0b~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Yellowheaded%20Wrasse2_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_65dd3eea011446c1add87fe3c9779872~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SmoothTrunkfish_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_02e6d1b838a14c88b64ea885fa151062~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ballyho_S_Walters.jpg',
    'https://static.wixstatic.com/media/a946bc_6f32ff85fb51437da4ac49b1ee746cd2~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/GoldenTailMorrayEel_M_Navarro.jpg',
    'https://static.wixstatic.com/media/a946bc_454dc387c0614ac89210cd638912983e~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chain%20moray%20eel_S_Walters.jpg',
    'https://static.wixstatic.com/media/a946bc_fd1a8e2dffd74c43bf37f8a3613a6bad~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Glassy%20Sweepers_S_Walters.jpg',
    'https://static.wixstatic.com/media/a946bc_12aa6e86e9d04c0b85be959f43895dee~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Juv_Bluehead_Wrass_C_Walter.jpg',
    'https://static.wixstatic.com/media/a946bc_9576ad0f13844f68a9475e62e99966a7~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Yellowtail%20Damselfish2_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_e0ade4ace4a341b091cee6c821d3baf4~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/StarCoral_M_%20Navarro(2).jpg',
    'https://static.wixstatic.com/media/a946bc_25c605b400224038ae12f3b81181d3fb~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nassau%20Grouper_A_Perrus.jpg',
    'https://static.wixstatic.com/media/a946bc_96bbdeef6801417bb69d219779f9362f~mv2.jpg/v1/fill/w_636,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Bandtail%20Puffer_A_Perrus.jpg']

    function spawn_fishpic1() {
        return(fish1[Math.floor(Math.random() * 15)])
    }
    function spawn_fishpic2() {
        return(fish2[Math.floor(Math.random() * 15)])
    }
    function spawn_fishpic3() {
        return(fish3[Math.floor(Math.random() * 15)])
    }
    function spawn_fishpic4() {
        return(fish4[Math.floor(Math.random() * 15)])
    }