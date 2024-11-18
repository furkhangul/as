const text = document.querySelector(".sec-text");
    const textLoad = () =>{
        setTimeout(() =>{
            text.textContent = "Web Geliştirme";
        },0);
         setTimeout(() =>{
            text.textContent = "Girişim";
        },4000);
         setTimeout(() =>{
            text.textContent = "Yazılım Hizmetleri";
        },8000);
                  setTimeout(() =>{
            text.textContent = "Siber Güvenlik";
        },12000);
                                    setTimeout(() =>{
            text.textContent = "Blog";
        },16000);
    }

    textLoad();
    interval();
