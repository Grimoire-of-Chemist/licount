// Javascript licount - Simple lightweight counting component.
// // Released under GNU General Public License v3.0 Opensourced. (https://github.com/LF112/licount/)
// Author @LF112 (https://github.com/lf112)
// Copyright reservation is required.

let licount = function( Config ){

    console.log('\n %c 🧷licount %c https://github.com/LF112/licount %c BY%c LF112  \n\n', 'color: #ffffff; background: rgb(0, 145, 228); padding:5px 0;', 'background:rgba(197, 197, 197, 0.89); padding:5px 0;', 'color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;', 'color: rgb(0, 145, 228); background: rgba(49, 49, 49, 0.85); padding:5px 0;');

    return new Promise( function() {

        // Main

        //Verify or create LeanCloud Javascript SDK.
        try {
            if (typeof(AV.version) == 'undefined') console.log('「LiCount」Successfully loaded the LeanCloud SDK, but the version is unknown.');
                else console.log('「LiCount」Successfully loaded LeanCloud SDK V' + AV.version);
        }catch (e) {
            if (e) {
                console.log('「LiCount」LeanCloud Javascript SDK not found...' + '\n「LiCount」Now, try loading the LeanCloud Javascript SDK.');

                const Load_LC_SDK = document.createElement('script');
                Load_LC_SDK.setAttribute('src', 'https://cdn.jsdelivr.net/npm/leancloud-storage@3.12.0/dist/av-min.js');
                document.getElementsByTagName('body')[0].appendChild(Load_LC_SDK);
                Load_LC_SDK.onload = function() { console.log('「LiCount」LeanCloud is loaded!' + '\n「LiCount」LeanCloud SDK V' + AV.version) }
            } else console.log('「LiCount」Unknown error: ' + e);
        }

        //Judging and create configuration.
        if (typeof(Config) != 'undefined') {
            if (typeof(Config.APPID) != 'undefined' && typeof(Config.APPKEY) != 'undefined'){

                AV.initialize(Config.APPID, Config.APPKEY);

            } else console.log('「LiCount」APPID or APPKEY are not defined!');
        } else console.log('「LiCount」Being ready to go :)');

        //Coding more...

    });
};