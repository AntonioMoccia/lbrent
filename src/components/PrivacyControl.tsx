'use client'
import React, { useEffect } from "react";

function PrivacyControl() {
  useEffect(() => {
    let script = document.createElement("script");
    script.innerText = `var _iub = _iub || [];
    _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"floatingPreferencesButtonDisplay":"bottom-left","perPurposeConsent":true,"siteId":3596814,"whitelabel":false,"cookiePolicyId":70153084,"lang":"it", "banner":{ "acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom","showTitle":false }};`;
    document.body.appendChild(script);
    let script_one = document.createElement("script");
    script_one.src = "https://cs.iubenda.com/autoblocking/3596814.js";
    document.body.appendChild(script_one);
    let script_two = document.createElement("script");
    script_two.src = "//cdn.iubenda.com/cs/iubenda_cs.js";
    script_two.async = true;
    document.body.appendChild(script_two);
  }, []);

  return <></>;
}

export default PrivacyControl;
