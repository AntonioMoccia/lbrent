'use client'
import React, { useEffect } from 'react'

function CookiePolicyButton() {
    useEffect(()=>{
        const script = document.createElement('script')
        script.innerText = `(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`
        document.body.appendChild(script)
    },[])
  return (
    <a href="https://www.iubenda.com/privacy-policy/70153084/cookie-policy" className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>
  )
}

export default CookiePolicyButton