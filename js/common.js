/****************************
 ***** Global Namespace *****
 ****************************/
var App = App = App || {
    isLog: true,
    initTest: function() {

    }
};
/*************************************
 ***** Main functions start here *****
 *************************************/
jQuery(document).ready(function() {
    with (App) {
//        initFormCV();
//        initFormContacts();
//        initClearFile();
//        initListeTap();
//        initUploadFile();
//        initSumMoney();
//        initChoississezSelect();
//        initEtablissementsLogin();
//        initMenuEtab();
//        initEtablissementsLogout();
//        initActivitiesEtab();
//        initServicesEtab();
//        initActiveMenu();
//        initSlideshowEtab();
//        initNewsEtab();
//        initGetPassEtab();
//        initListMenuMobile();
//        initToggle();
//        initMenuTopMobile();
//        initLanguage();
        // .....
    }


    jQuery('.Simuler-son-tarif').bind('click', function() {
        jQuery(".thickbox.button-colisee").trigger("click");

    });

});

/******************************
 ***** Show error if have *****
 ******************************/
function log(msg) {
    if (!App.isLog)
        return false;
    if (typeof (console) != 'undefined') {
        console.log(msg);
    }
}

window.onerror = function(msg, url, linenumber) {
    if (typeof (console) != 'undefined') {
        console.log('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
    }
    return false;
};
/******************************
 ***** Functions built in *****
 ******************************/
App.browserName = function() {
    var Browser = navigator.userAgent;
    if (Browser.indexOf('MSIE') >= 0) {
        Browser = 'MSIE';
    }
    else if (Browser.indexOf('Firefox') >= 0) {
        Browser = 'Firefox';
    }
    else if (Browser.indexOf('Chrome') >= 0) {
        Browser = 'Chrome';
    }
    else if (Browser.indexOf('Safari') >= 0) {
        Browser = 'Safari';
    }
    else if (Browser.indexOf('Opera') >= 0) {
        Browser = 'Opera';
    }
    else {
        Browser = 'UNKNOWN';
    }
    return Browser;

};

/**
 * Class name : App
 * Method: initFormCV
 */

//App.initClearFile = function() {
//    var ClearFileCV = jQuery('.customfile-container-cv');
//    var ClearFileLE = jQuery('.customfile-container-le');
//    if (ClearFileCV.length > 0) {
//        ClearFileCV.click(function() {
//            jQuery(".customfile-container-cv .customfile-filename").val("");
//        })
//    }
//    if (ClearFileLE.length > 0) {
//        ClearFileLE.click(function() {
//            jQuery(".customfile-container-le .customfile-filename").val("");
//        })
//    }
//};
//App.initActiveMenu = function() {
//    var navigation = jQuery('.menu-etab');
//    if (navigation.length > 0) {
//        jQuery('.nav-menu').click(function(event) {
//            event.preventDefault();
//            jQuery(".main").removeClass('active ');
//            jQuery(this).addClass('active ');
//            jQuery(".tab").addClass('display ');
//            jQuery(".tab-menu").removeClass('display ');
//        })
//        jQuery('.nav-activities').click(function(event) {
//            event.preventDefault();
//            jQuery(".main").removeClass('active ');
//            jQuery(this).addClass('active ');
//            jQuery(".tab").addClass('display ');
//            jQuery(".tab-activities").removeClass('display ');
//        })
//        jQuery('.nav-services').click(function(event) {
//            event.preventDefault();
//            jQuery(".main").removeClass('active ');
//            jQuery(this).addClass('active ');
//            jQuery(".tab").addClass('display ');
//            jQuery(".tab-services").removeClass('display ');
//        })
//        jQuery('.nav-news').click(function(event) {
//            event.preventDefault();
//            jQuery(".main").removeClass('active ');
//            jQuery(this).addClass('active ');
//            jQuery(".tab").addClass('display ');
//            jQuery(".tab-news").removeClass('display ');
//        })
//        jQuery('.nav-slideshow').click(function(event) {
//            event.preventDefault();
//            jQuery(".main").removeClass('active ');
//            jQuery(this).addClass('active ');
//            jQuery(".tab").addClass('display ');
//            jQuery(".tab-slideshow").removeClass('display ');
//        })
//    }
//};
//App.initChoississezSelect = function() {
//    var choississezSelect = jQuery('.choississez-select');
//    var selectPopin = jQuery('.select-popin');
//    if (choississezSelect.length > 0) {
//        choississezSelect.change(function(event) {
//            event.preventDefault();
//            var value = jQuery(".choississez-select option:selected").val();
//            jQuery('.sum-etab').html(value + " euros*");
//            return false;
//        })
//    }
//    if (selectPopin.length > 0) {
//        selectPopin.change(function(event) {
//            event.preventDefault();
//            var value2 = jQuery(".select-popin option:selected").val();
//            jQuery('.sum-etab').html(value2 + " euros*");
//            return false;
//        })
//    }
//};
//App.initLanguage = function() {
//    var slugPage = jQuery('.slug-page');
//    if (slugPage.length > 0) {
//        var value = jQuery(slugPage).val();
//        if (value == "Colisee Group" || value == "English") {
//            jQuery('.uk').addClass('current');
//        } else {
//            jQuery('.fr').addClass('current');
//        }
//        return false;
//
//    }    
//};
//App.initEtablissementsLogout = function() {
//    var ButtonLogout = jQuery('.header-etab-admin .logout a');
//    if (ButtonLogout.length > 0) {
//        ButtonLogout.click(function(event) {
//            event.preventDefault();
//            setCookie("etabid", "");
//            window.location.href = "/eta-login";
//            return false;
//        })
//    }
//};
//App.initFormCV = function() {
//    var formSendContacts = jQuery('#formSendCV');
//    if (formSendContacts.length > 0) {
//        formSendContacts.submit(function(event) {
//            jQuery("#btn-send-cv").prop("type", "hidden");
//            jQuery("#btn-send").prop("type", "button");
//            event.preventDefault();
//            var datas = new FormData(this);
//            jQuery.ajax({
//                url: the_ajax_sendcv.ajaxurl_sendcv, // point to server-side PHP script 
//                dataType: 'text', //what to expect back from the PHP script, if anything
//                cache: false,
//                contentType: false,
//                processData: false,
//                data: datas,
//                type: 'POST',
//                success: function(response) {
//                    jQuery("#errfrmMsg").html("Votre message a été envoyé! Nous vous recontacterons rapidement.").css({"display": "block"});
//                    jQuery("#name,#last-name,#email-candidature,#votre_cv,#votre_le,.customfile-filename").val("");
//                    jQuery("#btn-send").prop("type", "hidden");
//                    jQuery("#btn-send-cv").prop("type", "submit");
//
//                }
//            });
//            return false;
//        })
//    }
//};
//App.initUploadFile = function() {
//    var formSendContacts = jQuery('.rejoindre,#form-services-etab');
//    if (formSendContacts.length > 0) {
//        var image1 = jQuery('.image-2').val();
//        var image2 = jQuery('.image-4').val();
//        (function(jQuery) {
//
//// Browser supports HTML5 multiple file?
//            var multipleSupport = typeof jQuery('<input/>')[0].multiple !== 'undefined',
//                    isIE = /msie/i.test(navigator.userAgent);
//            jQuery.fn.customFile = function() {
//
//                return this.each(function() {
//
//                    var jQueryfile = jQuery(this).addClass('customfile'), // the original file input
//                            jQuerywrap = jQuery('<div class="customfile-wrap">'),
//                            // Button that will be used in non-IE browsers                    
//                            jQuerybutton = jQuery('<a href="javascript:void(0);" class="button-upload">importer</a>'),
//                            jQueryinput = jQuery('<input type="text" class="customfile-filename" value="" disabled/><a href="javascript:void(0);" class="clear-file"></a>'),
//                            // Hack for IE
//                            jQuerylabel = jQuery('<label class="customfile-upload" for="' + jQueryfile[0].id + '">Open</label>');
//                    // Hide by shifting to the left so we
//                    // can still trigger events
//                    jQueryfile.css({
//                        position: 'absolute',
//                        left: '-9999px'
//                    });
//                    jQuerywrap.insertAfter(jQueryfile)
//                            .append(jQueryfile, jQueryinput, (isIE ? jQuerylabel : jQuerybutton));
//                    // Prevent focus
//                    jQueryfile.attr('tabIndex', -1);
//                    jQuerybutton.attr('tabIndex', -1);
//                    jQuerybutton.click(function() {
//                        jQueryfile.focus().click(); // Open dialog
//                    });
//                    jQueryfile.change(function() {
//
//                        var files = [], fileArr, filename;
//                        // If multiple is supported then extract
//                        // all filenames from the file array
//                        if (multipleSupport) {
//                            fileArr = jQueryfile[0].files;
//                            for (var i = 0, len = fileArr.length; i < len; i++) {
//                                files.push(fileArr[i].name);
//                            }
//                            filename = files.join(', ');
//                            // If not supported then just take the value
//                            // and remove the path to just show the filename
//                        } else {
//                            filename = jQueryfile.val().split('\\').pop();
//                        }
//
//                        jQueryinput.val(filename) // Set the value
//                                .attr('title', filename) // Show filename in title tootlip
//                                .focus(); // Regain focus
//
//                    });
//                    jQueryinput.on({
//                        blur: function() {
//                            jQueryfile.trigger('blur');
//                        },
//                        keydown: function(e) {
//                            if (e.which === 13) { // Enter
//                                if (!isIE) {
//                                    jQueryfile.trigger('click');
//                                }
//                            } else if (e.which === 8 || e.which === 46) { // Backspace & Del
//                                // On some browsers the value is read-only
//                                // with this trick we remove the old input and add
//                                // a clean clone with all the original events attached
//                                jQueryfile.replaceWith(jQueryfile = jQueryfile.clone(true));
//                                jQueryfile.trigger('change');
//                                jQueryinput.val('');
//                            } else if (e.which === 9) { // TAB
//                                return;
//                            } else { // All other keys
//                                return false;
//                            }
//                        }
//                    });
//                });
//            };
//            // Old browser fallback
//            if (!multipleSupport) {
//                jQuery(document).on('change', 'input.customfile', function() {
//
//                    var jQuerythis = jQuery(this),
//                            // Create a unique ID so we
//                            // can attach the label to the input
//                            uniqId = 'customfile_' + (new Date()).getTime(),
//                            jQuerywrap = jQuerythis.parent(),
//                            // Filter empty input
//                            jQueryinputs = jQuerywrap.siblings().find('.customfile-filename')
//                            .filter(function() {
//                                return !this.value
//                            }),
//                            jQueryfile = jQuery('<input type="file" id="' + uniqId + '" name="' + jQuerythis.attr('name') + '"/>');
//                    // 1ms timeout so it runs after all other events
//                    // that modify the value have triggered
//                    setTimeout(function() {
//                        // Add a new input
//                        if (jQuerythis.val()) {
//                            // Check for empty fields to prevent
//                            // creating new inputs when changing files
//                            if (!jQueryinputs.length) {
//                                jQuerywrap.after(jQueryfile);
//                                jQueryfile.customFile();
//                            }
//                            // Remove and reorganize inputs
//                        } else {
//                            jQueryinputs.parent().remove();
//                            // Move the input so it's always last on the list
//                            jQuerywrap.appendTo(jQuerywrap.parent());
//                            jQuerywrap.find('input').focus();
//                        }
//                    }, 1);
//                });
//            }
//
//        }(jQuery));
//        jQuery('input[type=file]').customFile();
//        jQuery(".upload-image-1 .customfile-filename").val(image1);
//        jQuery(".upload-image-2 .customfile-filename").val(image2);
//
//
//    }
//    return false;
//};
//App.initListeTap = function() {
//    var formSendContacts = jQuery('.list-all-tab,.slideshow-etab');
//    if (formSendContacts.length > 0) {
//        jQuery(function() {
//
//            var menu_ul = jQuery('.list-all-tab > ul,.slideshow-etab > ul'),
//                    menu_a = jQuery('.list-all-tab > a,.slideshow-etab > a');
//
//            menu_ul.hide();
//
//            menu_a.click(function(e) {
//                e.preventDefault();
//                if (!jQuery(this).hasClass('active')) {
//                    menu_a.removeClass('active');
//                    menu_ul.filter(':visible').slideUp('normal');
//                    jQuery(this).addClass('active').next().stop(true, true).slideDown('normal');
//                } else {
//                    jQuery(this).removeClass('active');
//                    jQuery(this).next().stop(true, true).slideUp('normal');
//                }
//            });
//
//        });
//
//    }
//    return false;
//};
//App.initToggle = function() {
//    var Toggle = jQuery('.toggle');
//    if (Toggle.length > 0) {
//        jQuery(Toggle).click(function() {
//            jQuery(".menu-header").slideToggle("slow");
//        });
//
//    }
//    return false;
//};
//App.initMenuTopMobile = function() {
//    var Toggle = jQuery('.menu-top');
//    if (Toggle.length > 0) {
//        jQuery(Toggle).click(function() {
//            jQuery(".menu-top-mobile").slideToggle("slow");
//        });
//
//    }
//    return false;
//};
//App.initListMenuMobile = function() {
//    var MenuMobile = jQuery('.menu-footer-mobile');
//    if (MenuMobile.length > 0) {
//        jQuery(function() {
//
//            var menu_ul = jQuery('.menu-footer-mobile .menu-item-has-children > ul'),
//                    menu_a = jQuery('.menu-footer-mobile .menu-item-has-children > a');
//
//            menu_ul.hide();
//
//            menu_a.click(function(e) {
//                e.preventDefault();
//                if (!jQuery(this).hasClass('active')) {
//                    menu_a.removeClass('active');
//                    menu_ul.filter(':visible').slideUp('normal');
//                    jQuery(this).addClass('active').next().stop(true, true).slideDown('normal');
//                } else {
//                    jQuery(this).removeClass('active');
//                    jQuery(this).next().stop(true, true).slideUp('normal');
//                }
//            });
//
//        });
//
//    }
//    return false;
//};
//App.initFormContacts = function() {
//    var formSendContacts = jQuery('#formformSendContacts');
//    if (formSendContacts.length > 0) {
//        formSendContacts.submit(function(event) {
//            event.preventDefault();
//            var name = jQuery('#name').val();
//            var firstname = jQuery('#firstname').val();
//            var phone = jQuery('#phone').val();
//            var email = jQuery('#email').val();
//            var adresse = jQuery('#adresse').val();
//            var codepostal = jQuery('#codepostal').val();
//            var ville = jQuery('#ville').val();
//            var pays = jQuery('#pays').val();
//            var message = jQuery('#message').val();
//            var souhaitez = jQuery("#souhaitez option:selected").val();
//            var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//            var isvalid = emailRegexStr.test(email);
//            /*  jQuery(":input").focusout(function() {
//             jQuery("#name,#souhaitez,#firstname,#phone,#email,#adresse,#codepostal,#ville,#pays,#message").removeClass("required");
//             });*/
//            if (name.length == 0) {
//                jQuery("#name").addClass("required");
//                jQuery("#name").focus();
//                alert("Merci de renseigner votre nom.");
//                return false;
//            }
//            if (firstname.length == 0) {
//                jQuery("#firstname").focus();
//                jQuery("#firstname").addClass("required");
//                alert("Merci de renseigner votre prénom");
//                return false;
//            }
//            if (phone.length == 0) {
//                jQuery("#phone").focus();
//                jQuery("#phone").addClass("required");
//                alert("Merci de renseigner votre numéro de téléphone");
//                return false;
//            }
//            if (email.length == 0) {
//                jQuery("#email").focus();
//                jQuery("#email").addClass("required");
//                alert("Merci de renseigner votre email");
//                return false;
//            } else {
//                if (!isvalid) {
//                    jQuery("#email").focus();
//                    jQuery("#email").addClass("required");
//                    alert("L'adresse e-mail ne est pas valide!");
//                    return false;
//                }
//            }
//            if (adresse.length == 0) {
//                jQuery("#adresse").focus();
//                jQuery("#adresse").addClass("required");
//                alert("Vous ne avez pas entré votre adresse");
//                return false;
//            }
//            if (codepostal.length == 0) {
//                jQuery("#codepostal").focus();
//                jQuery("#codepostal").addClass("required");
//                alert("Merci de renseigner votre code postal");
//                return false;
//            }
//            if (ville.length == 0) {
//                jQuery("#ville").focus();
//                jQuery("#ville").addClass("required");
//                alert("Merci de renseigner votre ville");
//                return false;
//            }
//            if (pays.length == 0) {
//                jQuery("#pays").focus();
//                jQuery("#pays").addClass("required");
//                alert("Merci de renseigner votre pays");
//                return false;
//            }
//            if (souhaitez.length == "") {
//                jQuery("#souhaitez").addClass("required");
//                alert("Merci de renseigner le sujet de votre demande.");
//                return false;
//            }
//            if (message.length == 0) {
//                jQuery("#message").focus();
//                jQuery("#name").addClass("required");
//                alert("Merci de compléter votre demande avec un message.");
//                return false;
//            }
////            var datas = new FormData();
//            jQuery.post(the_ajax_contacts.ajaxurl_contacts,
//                    jQuery("#formformSendContacts").serialize(),
//                    function(response) {
//                        jQuery("#errfrmMsg").html("Votre message a été envoyé! Nous vous recontacterons rapidement.").css({"display": "block"});
//                        jQuery("#name,#firstname,#phone,#email,#adresse,#codepostal,#ville,#pays,#message,.email_etab,.sub_email").val("");
//                        jQuery("#name,#souhaitez,#firstname,#phone,#email,#adresse,#codepostal,#ville,#pays,#message").removeClass("required");
//                        jQuery("#name,#souhaitez,#firstname,#phone,#email,#adresse,#codepostal,#ville,#pays,#message").removeAttr("required");
//                    }
//            );
//        });
//    }
//    return false;
//};
//App.initEtablissementsLogin = function() {
//    var Etablissements = jQuery('#login');
//    var name = jQuery('#username');
//    var password = jQuery('#password');
//    var forgotpass = jQuery('.forgot-pass');
//    var login = jQuery('.getpass .login');
//    if (Etablissements.length > 0) {
//        Etablissements.submit(function(event) {
//            event.preventDefault();
//            jQuery.post(the_ajax_etablogin.ajaxurl_etablogin,
//                    jQuery("#login").serialize(),
//                    function(response) {
//                        var data = jQuery.parseJSON(response);
//                        if (data.err == 0) {
//                            jQuery("#errfrmMsg").html(data.msg).css({"display": "block"});
//                        }
//                        if (data.err == 1) {
//                            setCookie("etabid", data.id);
//                            window.location.href = "/manage-etablissement";
//                        }
//                    }
//            );
//        });
//        name.click(function(event) {
//            event.preventDefault();
////            jQuery("#errfrmMsg").html("").css({"display": "block"});
//
//        });
//        password.click(function(event) {
//            event.preventDefault();
////            jQuery("#errfrmMsg").html("").css({"display": "block"});
//
//        });
//        forgotpass.click(function(event) {
//            event.preventDefault();
//            jQuery('#login').addClass("display");
//            jQuery('.getpass').removeClass("display");
//
//        });
//        login.click(function(event) {
//            event.preventDefault();
//            jQuery('#login').removeClass("display");
//            jQuery('.getpass').addClass("display");
//
//        });
//    }
//    return false;
//};
//App.initMenuEtab = function() {
//    var Menuetab = jQuery('#form-menu-etab');
//    if (Menuetab.length > 0) {
//        jQuery('.lundi-dejeuner-x').click(function() {
//            jQuery('.lundi-dejeuner').val("")
//        });
//        jQuery('.lundi-dinner-x').click(function() {
//            jQuery('.lundi-dinner').val("")
//        });
//        jQuery('.mardi-dejeuner-x').click(function() {
//            jQuery('.mardi-dejeuner').val("")
//        });
//        jQuery('.mardi-dinner-x').click(function() {
//            jQuery('.mardi-dinner').val("")
//        });
//        jQuery('.mercredi-dejeuner-x').click(function() {
//            jQuery('.mercredi-dejeuner').val("")
//        });
//        jQuery('.mercredi-dinner-x').click(function() {
//            jQuery('.mercredi-dinner').val("")
//        });
//        jQuery('.jeudi-dejeuner-x').click(function() {
//            jQuery('.jeudi-dejeuner').val("")
//        });
//        jQuery('.jeudi-dinner-x').click(function() {
//            jQuery('.jeudi-dinner').val("")
//        });
//        jQuery('.vendredi-dejeuner-x').click(function() {
//            jQuery('.vendredi-dejeuner').val("")
//        });
//        jQuery('.vendredi-dinner-x').click(function() {
//            jQuery('.vendredi-dinner').val("")
//        });
//        jQuery('.samedi-dejeuner-x').click(function() {
//            jQuery('.samedi-dejeuner').val("")
//        });
//        jQuery('.samedi-dinner-x').click(function() {
//            jQuery('.samedi-dinner').val("")
//        });
//        jQuery('.dimanche-dejeuner-x').click(function() {
//            jQuery('.dimanche-dejeuner').val("")
//        });
//        jQuery('.dimanche-dinner-x').click(function() {
//            jQuery('.dimanche-dinner').val("")
//        });
//        Menuetab.submit(function(event) {
//            event.preventDefault();
//            jQuery.post(the_ajax_menuetab.ajaxurl_menuetab,
//                    jQuery(Menuetab).serialize(),
//                    function(response) {
//                        jQuery("#errfrmMsg").html("Mis à jour avec succès.").css({"display": "block"});
//                        jQuery(window).scrollTop(0);
//                    }
//            );
//        });
//    }
//    return false;
//};
//App.initNewsEtab = function() {
//    var Newstab = jQuery('#form-news-etab');
//    if (Newstab.length > 0) {
//        jQuery('.news-x').click(function() {
//            jQuery('.news').val("")
//        });
//        Newstab.submit(function(event) {
//            event.preventDefault();
//            jQuery.post(the_ajax_newsetab.ajaxurl_newsetab,
//                    jQuery(Newstab).serialize(),
//                    function(response) {
//                        jQuery("#MsgNews").html("Mis à jour avec succès.").css({"display": "block"});
//                        jQuery(window).scrollTop(0);
//                        location.reload();
//                    }
//            );
//        });
//    }
//    return false;
//};
//App.initGetPassEtab = function() {
//    var GetPassEtab = jQuery('#form-get-pass');
//    if (GetPassEtab.length > 0) {
//        GetPassEtab.submit(function(event) {
//            event.preventDefault();
//            var email = jQuery('.email-get-pass').val();
//            // var emailRegexStr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//            //var isvalid = emailRegexStr.test(email);
//            if (email.length == 0) {
//                jQuery(".email-get-pass").focus();
//                jQuery(".email-get-pass").addClass("required");
//                alert("Merci de renseigner votre identifiant");
//                return false;
//            }
//            /*else {
//             if (!isvalid) {
//             jQuery("email-get-pass").focus();
//             jQuery("email-get-pass").addClass("required");
//             alert("L'adresse e-mail ne est pas valide!");
//             return false;
//             }
//             }*/
//            jQuery.post(the_ajax_getpass.ajaxurl_getpass,
//                    jQuery(GetPassEtab).serialize(),
//                    function(response) {
//                        var data = jQuery.parseJSON(response);
//                        if (data.err == 0) {
//                            jQuery("#MsgEmail").html(data.msg).css({"display": "block", "color": "#0F40FF"});
//                        }
//                        if (data.err == 1) {
//                            jQuery("#MsgEmail").html(data.msg).css({"display": "block", "color": "red"});
//                        }
//
//                    }
//            );
//        });
//    }
//    return false;
//};
//App.initActivitiesEtab = function() {
//    var Activitiesetabtab = jQuery('#form-activities-etab');
//    if (Activitiesetabtab.length > 0) {
//        jQuery('.lundi-x').click(function() {
//            jQuery('.lundi').val("");
//        });
//        jQuery('.lundi-apres-midi-x').click(function() {
//            jQuery('.lundi-apres-midi').val("");
//        });
//        jQuery('.mardi-x').click(function() {
//            jQuery('.mardi').val("");
//        });
//        jQuery('.mardi-apres-midi-x').click(function() {
//            jQuery('.mardi-apres-midi').val("");
//        });
//        jQuery('.mercredi-x').click(function() {
//            jQuery('.mercredi').val("");
//        });
//        jQuery('.mercredi-apres-midi-x').click(function() {
//            jQuery('.mercredi-apres-midi').val("");
//        });
//        jQuery('.jeudi-x').click(function() {
//            jQuery('.jeudi').val("");
//        });
//        jQuery('.jeudi-apres-midi-x').click(function() {
//            jQuery('.jeudi-apres-midi').val("");
//        });
//        jQuery('.vendredi-x').click(function() {
//            jQuery('.vendredi').val("");
//        });
//        jQuery('.vendredi-apres-midi-x').click(function() {
//            jQuery('.vendredi-apres-midi').val("");
//        });
//        jQuery('.samedi-x').click(function() {
//            jQuery('.samedi').val("");
//        });
//        jQuery('.samedi-apres-midi-x').click(function() {
//            jQuery('.samedi-apres-midi').val("");
//        });
//        jQuery('.dimanche-x').click(function() {
//            jQuery('.dimanche').val("");
//        });
//        jQuery('.dimanche-apres-midi-x').click(function() {
//            jQuery('.dimanche-apres-midi').val("");
//        });
//        Activitiesetabtab.submit(function(event) {
//            event.preventDefault();
//            jQuery.post(the_ajax_activitiesetab.ajaxurl_activitiesetab,
//                    jQuery(Activitiesetabtab).serialize(),
//                    function(response) {
////                        log(response);
////                        return false;
//                        jQuery("#Msgactivities").html("Mis à jour avec succès.").css({"display": "block"});
//                        jQuery(window).scrollTop(0);
//                    }
//            );
//        });
//    }
//    return false;
//};
//App.initServicesEtab = function() {
//    var Servicesetab = jQuery('#form-services-etab');
//    if (Servicesetab.length > 0) {
//        Servicesetab.submit(function(event) {
//            event.preventDefault();
//            jQuery.post(the_ajax_servicesetab.ajaxurl_servicesetab,
//                    jQuery(Servicesetab).serialize(),
//                    function(response) {
//                        jQuery("#MsgService").html("Mis à jour avec succès.").css({"display": "block"});
//                        jQuery(window).scrollTop(0);
//                    }
//            );
//        });
//    }
//    return false;
//};
//App.initSlideshowEtab = function() {
//    var Slideshowetab = jQuery('#form-slideshow-etab');
//    if (Slideshowetab.length > 0) {
//        Slideshowetab.submit(function(event) {
//            event.preventDefault();
//            var datas = new FormData(this);
//            jQuery.ajax({
//                url: the_ajax_slideshowetab.ajaxurl_slideshowetab, // point to server-side PHP script 
//                dataType: 'text', //what to expect back from the PHP script, if anything
//                cache: false,
//                contentType: false,
//                processData: false,
//                data: datas,
//                type: 'POST',
//                success: function(response) {
//                    jQuery("#MsgSlideshow").html("Mis à jour avec succès.").css({"display": "block"});
//                    jQuery(".regionname ").removeClass("active");
//                    jQuery(".list-all-tab ul").css({"display": "none"});
//                    jQuery(window).scrollTop(0);
//                    location.reload();
//
//                }
//            });
//            return false;
//
//        });
//    }
//    return false;
//};
//App.initSumMoney = function() {
//    jQuery('.calculator .input-money input[type="text"]').keyup(function() {
//        var loyer = jQuery('#loyer').val();
//        var taxe = jQuery("#ma-taxe").val();
//        var depenses = jQuery("#mes-depenses").val();
//        var lentretien = jQuery("#lentretien").val();
//        var restauration = jQuery("#restauration").val();
//        var deplacements = jQuery("#mes-deplacements").val();
//        var loisirs = jQuery("#mes-loisirs").val();
//        var securite = jQuery("#ma-securite").val();
//        var sum = parseInt(loyer) + parseInt(taxe) + parseInt(depenses) + parseInt(lentretien) + parseInt(restauration) + parseInt(deplacements) + parseInt(loisirs) + parseInt(securite);
//        jQuery('#total').html(sum);
//    });
//    jQuery('.calculator .boder-etab input[type="text"]').keyup(function() {
//        var loyer_etab = jQuery("#loyer-etab").val();
//        var taxe_etab = jQuery("#ma-taxe-etab").val();
//        var depenses_etab = jQuery("#mes-depenses-etab").val();
//        var lentretien_etab = jQuery("#lentretien-etab").val();
//        var restauration_etab = jQuery("#restauration-etab").val();
//        var deplacements_etab = jQuery("#mes-deplacements-etab").val();
//        var loisirs_etab = jQuery("#mes-loisirs-etab").val();
//        var securite_etab = jQuery("#ma-securite-etab").val();
//        var sum = parseInt(loyer_etab) + parseInt(taxe_etab) + parseInt(depenses_etab) + parseInt(lentretien_etab) + parseInt(restauration_etab) + parseInt(deplacements_etab) + parseInt(loisirs_etab) + parseInt(securite_etab);
//        jQuery('.sum-etab').html(sum + " euros*");
//    });
//    jQuery(".calculator select").change(function() {
////          var value = jQuery(".calculator option:selected").val();
////          alert(value);
////          if(value==2){
////             jQuery( ".boder-etab" ).removeClass( "visible" ).addClass( "visible" );              
////          }
//    });
//    return false;
//};
//function openYouTube(id) {
//    //YouTube Player Parameters 
//    var width = "100%";
//    var height = "100%";
//    var FullScreen = "yes";
//    var AutoPlay = "yes";
//    var HighDef = "yes";
//    //Calculate Page width and height 
//    var pageWidth = window.innerWidth;
//    var pageHeight = window.innerHeight;
//    if (typeof pageWidth != "number") {
//        if (document.compatMode == "CSS1Compat") {
//            pageWidth = document.documentElement.clientWidth;
//            pageHeight = document.documentElement.clientHeight;
//        } else {
//            pageWidth = document.body.clientWidth;
//            pageHeight = document.body.clientHeight;
//        }
//    }
//    // Make Background visible... 
//    var divbg = document.getElementById('bg');
//    divbg.style.visibility = "visible";
//    divbg.style.opacity = "0.3";
//    divbg.style.position = "fixed";
//    //Create dynamic Div container for YouTube Popup Div 
//    var divobj = document.createElement('div');
//    divobj.setAttribute('id', id); // Set id to YouTube id 
//    divobj.className = "popup";
//    divobj.style.visibility = "visible";
//    var divWidth = width + 4;
//    var divHeight = height + 20;
//    divobj.style.width = divWidth + "px";
//    divobj.style.height = divHeight + "px";
//    var divLeft = (pageWidth - divWidth) / 2;
//    var divTop = (pageHeight - divHeight) / 2 - 10;
//    //Set Left and top coordinates for the div tag 
//    divobj.style.left = divLeft + "px";
//    divobj.style.top = divTop + "px";
//    //Create dynamic Close Button Div 
//    var closebutton = document.createElement('div');
//    closebutton.style.visibility = "visible";
//    closebutton.innerHTML = "<span onclick=\"closeYouTube('" + id + "')\" class=\"close_button\">X</span>";
//    //Add Close Button Div to YouTube Popup Div container 
//    divobj.appendChild(closebutton);
//    //Create dynamic YouTube Div 
//    var ytobj = document.createElement('div');
//    ytobj.setAttribute('id', "yt" + id);
//    ytobj.className = "ytcontainer";
//    ytobj.style.width = width + "px";
//    ytobj.style.height = height + "px";
//    if (FullScreen == "yes")
//        FullScreen = "&fs=1";
//    else
//        FullScreen = "&fs=0";
//    if (AutoPlay == "yes")
//        AutoPlay = "&autoplay=1";
//    else
//        AutoPlay = "&autoplay=0";
//    if (HighDef == "yes")
//        HighDef = "&hd=1";
//    else
//        HighDef = "&hd=0";
//    var URL = "http://www.youtube.com/v/" + id + "&hl=en&rel=0&showsearch=0" + FullScreen + AutoPlay + HighDef;
//    var YouTube = "<object width=\"" + width + "\" height=\"" + height + "\">";
//    YouTube += "<param name=\"movie\" value=\"" + URL + "\"></param>";
//    YouTube += "<param name=\"allowFullScreen\" value=\"true\"></param><param name=\"allowscriptaccess\" value=\"always\"></param>";
//    YouTube += "<embed src=\"" + URL + "\" type=\"application/x-shockwave-flash\" ";
//    YouTube += "allowscriptaccess=\"always\" allowfullscreen=\"true\" width=\"" + width + "\" height=\"" + height + "\"></embed></object>";
//    ytobj.innerHTML = YouTube;
//    //Add YouTube Div to YouTube Popup Div container 
//    divobj.appendChild(ytobj);
//    //Add YouTube Popup Div container to HTML BODY 
//    document.body.appendChild(divobj);
//}
//function closeYouTube(id) {
//    var divbg = document.getElementById('bg');
//    divbg.style.visibility = "visible";
//    divbg.style.opacity = "1";
//    divbg.style.position = "initial";
//    var divobj = document.getElementById(id);
//    var ytobj = document.getElementById("yt" + id);
//    divobj.removeChild(ytobj); //remove YouTube Div 
//    document.body.removeChild(divobj); // remove Popup Div 
//}
//function validate(evt) {
//    var theEvent = evt || window.event;
//    var key = theEvent.keyCode || theEvent.which;
//    key = String.fromCharCode(key);
//    var regex = /[0-9]|\./;
//    if (!regex.test(key)) {
//        theEvent.returnValue = false;
//        if (theEvent.preventDefault)
//            theEvent.preventDefault();
//    }
//}
//function setCookie(key, value) {
//    var expires = new Date();
//    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 24));
//    document.cookie = key + '=' + value + ';path=/' + ';expires=' + expires.toUTCString();
//}
//
//function isIE(version, comparison) {
//    var cc = 'IE',
//            b = document.createElement('B'),
//            docElem = document.documentElement,
//            isIE;
//
//    if (version) {
//        cc += ' ' + version;
//        if (comparison) {
//            cc = comparison + ' ' + cc;
//        }
//    }
//
//    b.innerHTML = '<!--[if ' + cc + ']><b id="iecctest"></b><![endif]-->';
//    docElem.appendChild(b);
//    isIE = !!document.getElementById('iecctest');
//    docElem.removeChild(b);
//    return isIE;
//}
//
//var isMobile = {
//    Android: function() {
//        return navigator.userAgent.match(/Android/i);
//    },
//    BlackBerry: function() {
//        return navigator.userAgent.match(/BlackBerry/i);
//    },
//    iOS: function() {
//        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//    },
//    Opera: function() {
//        return navigator.userAgent.match(/Opera Mini/i);
//    },
//    Windows: function() {
//        return navigator.userAgent.match(/IEMobile/i);
//    },
//    any: function() {
//        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
//    }
//};
//if (isMobile.any()) {
//    var address = jQuery(".address").val();
//    var detect = jQuery(".detect").val();
//    address = address.replace("www.", "");    
//    if (detect != "m.") {
//        window.location.href = "http://m." + address;
//    }
//}