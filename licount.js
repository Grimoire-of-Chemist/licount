// Javascript licount - Simple lightweight counting component.
// // Released under GNU General Public License v3.0 Opensourced. (https://github.com/LF112/licount/)
// Author @LF112 (https://github.com/lf112)
// Copyright reservation is required.

let LiCount_Lock = true,LiCount_Lock2 = true,LiCount_Main,LiCount_On, licount = function( Config ){

    console.log('\n %c 🧷licount %c https://github.com/LF112/licount %c BY%c LF112  \n\n', 'color: #ffffff; background: rgb(0, 145, 228); padding:5px 0;', 'background:rgba(197, 197, 197, 0.89); padding:5px 0;', 'color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;', 'color: rgb(0, 145, 228); background: rgba(49, 49, 49, 0.85); padding:5px 0;');

    return new Promise( function() {

        // Main

        //Verify or create LeanCloud Javascript SDK.
        try {
            if (typeof(AV.version) == 'undefined') { console.log('「LiCount」Successfully loaded the LeanCloud SDK, but the version is unknown.'); LiCount_Lock2 = false; On() }
                else console.log('「LiCount」Successfully loaded LeanCloud SDK V' + AV.version);
        }catch (e) {
            if (e) {
                console.log('「LiCount」LeanCloud Javascript SDK not found...' + '\n「LiCount」Now, try loading the LeanCloud Javascript SDK.');

                const Load_LC_SDK = document.createElement('script');
                Load_LC_SDK.setAttribute('src', 'https://cdn1.lncld.net/static/js/av-core-mini-0.6.1.js');
                document.getElementsByTagName('body')[0].appendChild(Load_LC_SDK);
                Load_LC_SDK.onload = function() {
                    console.log('「LiCount」LeanCloud is loaded!' + '\n「LiCount」LeanCloud SDK V' + AV.version);
                    LiCount_Lock2 = false;
                    On()
                }
            } else console.log('「LiCount」Unknown error: ' + e);
        }

        //Judging and create configuration.
        function On() {
            if (typeof (Config) != 'undefined') {
                if (typeof (Config.APPID) != 'undefined' && typeof (Config.APPKEY) != 'undefined') {

                    if (!LiCount_Lock2) {
                        AV.initialize(Config.APPID, Config.APPKEY);
                        LiCount_On = AV.Object.extend('LiCount');
                        LiCount_Main = new AV.Query(LiCount_On);
                        LiCount_Lock = false
                    }else console.log('「LiCount」LeanCloud is not loaded!');

                } else console.log('「LiCount」APPID or APPKEY are not defined!');
            } else console.log('「LiCount」Being ready to go :)');
        }

        //Coding more...

    });
}, licount_Show = function ( ID ) {
    return new Promise(function () {

        //Get the specified count.

         if (!LiCount_Lock) {

             if (!document.getElementById(ID)) console.log('「LiCount」DOM ID does not exist!');

             LiCount_Main.equalTo('ID', ID);
             LiCount_Main.find({
                 success: function( Results ) {
                     if ( Results.length != 0 ) {
                         for ( var i = 0; i < Results.length; i++ ) document.getElementById(ID).innerHTML = Results[i].get('count');
                     } else {
                         console.log('「LiCount」' + ID + ' has no data!');
                         document.getElementById(ID).innerHTML = 0
                     }
                 },
                 error: function( object, error ) {
                     console.log('「LiCount」LeanCloud Javascript SDK Error: ' + error.code + ' ' + error.message);
                 }
             });

         } else console.log('「LiCount」"licount_Show()" call failed, because LiCount is not initialized, please first "licount({APPID:\'_Your APPID_\',\'_Your APPKEY_\'});"');

    });
}, licount_Add = function ( ID ) {
    return new Promise(function () {

        //Create the specified count.

        if (!LiCount_Lock) {

            if (!document.getElementById(ID)) console.log('「LiCount」DOM ID does not exist!');

            LiCount_Main.equalTo('ID', ID);
            LiCount_Main.find({
                success: function( Results ) {
                    if ( Results.length > 0 ) {
                        var licount_ = Results[0];
                        licount_.fetchWhenSave(true);
                        licount_.increment('count');
                        licount_.save(null, {
                            success: function( ResultGet ) {
                                document.getElementById(ID).innerHTML = ResultGet.get('count');
                            },
                            error: function( ResultGet, error ) { console.log('「LiCount」LeanCloud Javascript SDK Failed to save Visitor num, with error message: ' + error.message) }
                        });
                    } else {
                        var LiCount_On_To = new LiCount_On();
                        LiCount_On_To.set('ID', ID);
                        LiCount_On_To.set('count', 1);
                        LiCount_On_To.save(null, {
                            success: function( ResultGet ) {
                                document.getElementById(ID).innerHTML = ResultGet.get('count');
                            },
                            error: function( ResultGet, error ) { console.log('「LiCount」LeanCloud Javascript SDK Failed to create!') }
                        });
                    }
                },
                error: function(error) {
                    console.log('「LiCount」LeanCloud Javascript SDK Error: ' + error.code + ' ' + error.message);
                }
            });

        } else console.log('「LiCount」"licount_Show()" call failed, because LiCount is not initialized, please first "licount({APPID:\'_Your APPID_\',\'_Your APPKEY_\'});"');

    });
};