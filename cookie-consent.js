/* ==========================================
   CONSENSO COOKIE

   Gestisce il banner cookie e carica lo
   script di Google AdSense SOLO se l'utente
   accetta. Necessario per la conformita
   GDPR quando mostri annunci a utenti UE/SEE.

   IMPORTANTE: sostituisci ADSENSE_CLIENT_ID
   qui sotto con il tuo vero ID cliente
   (del tipo "ca-pub-XXXXXXXXXXXXXXXX") che
   trovi nella dashboard di AdSense DOPO
   l'approvazione. Finche non sei stato
   approvato lascialo vuoto: il banner e la
   pagina privacy funzionano comunque, non
   verra solo caricato alcuno script.
========================================== */

const ADSENSE_CLIENT_ID = "ca-pub-7676236050925365";



const cookieBanner =
    document.getElementById("cookieBanner");

const cookieAccept =
    document.getElementById("cookieAccept");

const cookieReject =
    document.getElementById("cookieReject");



function getCookieConsent() {

    return localStorage.getItem(
        "footballMemoryCookieConsent"
    );

}


function setCookieConsent(value) {

    localStorage.setItem(
        "footballMemoryCookieConsent",
        value
    );

}


function loadAdsenseIfAccepted() {

    if (!ADSENSE_CLIENT_ID) {

        return;

    }


    if (getCookieConsent() !== "accepted") {

        return;

    }


    if (

        document.querySelector(
            'script[data-adsense-loaded]'
        )

    ) {

        return;

    }


    let script =
        document.createElement("script");

    script.async = true;

    script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" +
        ADSENSE_CLIENT_ID;

    script.crossOrigin = "anonymous";

    script.dataset.adsenseLoaded = "true";

    document.head.appendChild(script);

}



/* ==========================================
   MOSTRA IL BANNER SE NON C'E' ANCORA
   UNA SCELTA SALVATA
========================================== */

if (cookieBanner) {

    let consent =
        getCookieConsent();


    if (consent === null) {

        cookieBanner.classList.remove(
            "hidden"
        );

    }
    else {

        loadAdsenseIfAccepted();

    }


    cookieAccept.addEventListener(

        "click",

        function() {

            setCookieConsent("accepted");

            cookieBanner.classList.add(
                "hidden"
            );

            loadAdsenseIfAccepted();

        }

    );


    cookieReject.addEventListener(

        "click",

        function() {

            setCookieConsent("rejected");

            cookieBanner.classList.add(
                "hidden"
            );

        }

    );

}