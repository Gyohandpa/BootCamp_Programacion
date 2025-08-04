
document.addEventListener("DOMContentLoaded", function() {
    const nevera = document.getElementById("nevera");
    const nevera1 = document.getElementById("nevera1");
    const nevera_1 = document.getElementById("nevera_1");
    const nevera2 = document.getElementById("nevera2");
    const nevera_2 = document.getElementById("nevera_2");
    const lavadora = document.getElementById("lavadora");
    const lavadora1 = document.getElementById("lavadora1");
    const lavadora_1 = document.getElementById("lavadora_1");
    const lavadora2 = document.getElementById("lavadora2");
    const lavadora_2 = document.getElementById("lavadora_2");
    const televisor = document.getElementById("televisor");
    const televisor1 = document.getElementById("televisor1");
    const televisor_1 = document.getElementById("televisor_1");
    const plancha = document.getElementById("plancha");
    const plancha1 = document.getElementById("plancha1");
    const plancha_1 = document.getElementById("plancha_1");
    const planchavap = document.getElementById("planchavap");
    const planchavap1 = document.getElementById("planchavap1");
    const planchavap_1 = document.getElementById("planchavap_1");
    const micro = document.getElementById("micro");
    const micro1 = document.getElementById("micro1");
    const micro_1 = document.getElementById("micro_1");
    const aire = document.getElementById("aire");
    const aire1 = document.getElementById("aire1");
    const aire_1 = document.getElementById("aire_1");
    const aire2 = document.getElementById("aire2");
    const aire_2 = document.getElementById("aire_2");
    const freidora = document.getElementById("freidora");
    const freidora1 = document.getElementById("freidora1");
    const freidora_1 = document.getElementById("freidora_1");
    const licuadora = document.getElementById("licuadora");
    const licuadora1 = document.getElementById("licuadora1");
    const licuadora_1 = document.getElementById("licuadora_1");
    const ventilador = document.getElementById("ventilador");
    const ventilador1 = document.getElementById("ventilador1");
    const ventilador_1 = document.getElementById("ventilador_1");
    const ventilador2 = document.getElementById("ventilador2");
    const ventilador_2 = document.getElementById("ventilador_2");
    const arroz = document.getElementById("arroz");
    const arroz1 = document.getElementById("arroz1");
    const arroz_1 = document.getElementById("arroz_1");
    const arroz2 = document.getElementById("arroz2");
    const arroz_2 = document.getElementById("arroz_2");

    

    nevera.addEventListener("change", function() {
        if (this.value === 'si') {
            nevera_1.disabled= false;
            nevera_1.style.display = 'block';
            nevera1.style.display = 'block';
        } else {
            nevera_1.disabled = true;
            nevera_1.style.display = 'none';
            nevera1.style.display = 'none';
        }
    });
    nevera_1.addEventListener("change", function() {
        if (this.value !== '') {
            nevera_2.disabled= false;
            nevera_2.style.display = 'block';
            nevera2.style.display = 'block';
        } else {
            nevera_2.disabled = true;
            nevera_2.style.display = 'none';
            nevera2.style.display = 'none';
        }
    });
    lavadora.addEventListener("change", function() {
        if (this.value === 'si') {
            lavadora_1.disabled= false;
            lavadora_1.style.display = 'block';
            lavadora1.style.display = 'block';
        } else {
            lavadora_1.disabled = true;
            lavadora_1.style.display = 'none';
            lavadora1.style.display = 'none';
        }
    });
    lavadora_1.addEventListener("change", function() {
        if (this.value !== '') {
            lavadora_2.disabled= false;
            lavadora_2.style.display = 'block';
            lavadora2.style.display = 'block';
        } else {
            lavadora_2.disabled = true;
            lavadora_2.style.display = 'none';
            lavadora2.style.display = 'none';
        }
    });
    televisor.addEventListener("change", function() {
        if (this.value === 'si') {
            televisor_1.disabled= false;
            televisor_1.style.display = 'block';
            televisor1.style.display = 'block';
        } else {
            televisor_1.disabled = true;
            televisor_1.style.display = 'none';
            televisor1.style.display = 'none';
        }
    });
    televisor_1.addEventListener("change", function() {
        if (this.value !== '') {
            televisor_2.disabled= false;
            televisor_2.style.display = 'block';
            televisor2.style.display = 'block';
        } else {
            televisor_2.disabled = true;
            televisor_2.style.display = 'none';
            televisor2.style.display = 'none';
        }
    });
    plancha.addEventListener("change", function() {
        if (this.value === 'si') {
            plancha_1.disabled= false;
            plancha_1.style.display = 'block';
            plancha1.style.display = 'block';
        } else {
            plancha_1.disabled = true;
            plancha_1.style.display = 'none';
            plancha1.style.display = 'none';
        }
    });
    planchavap.addEventListener("change", function() {
        if (this.value === 'si') {
            planchavap_1.disabled= false;
            planchavap_1.style.display = 'block';
            planchavap1.style.display = 'block';
        } else {
            planchavap_1.disabled = true;
            planchavap_1.style.display = 'none';
            planchavap1.style.display = 'none';
        }
    });
    micro.addEventListener("change", function() {
        if (this.value === 'si') {
            micro_1.disabled= false;
            micro_1.style.display = 'block';
            micro1.style.display = 'block';
        } else {
            micro_1.disabled = true;
            micro_1.style.display = 'none';
            micro1.style.display = 'none';
        }
    });
    aire.addEventListener("change", function() {
        if (this.value === 'si') {
            aire_1.disabled= false;
            aire_1.style.display = 'block';
            aire1.style.display = 'block';
        } else {
            aire_1.disabled = true;
            aire_1.style.display = 'none';
            aire1.style.display = 'none';
        }
    });
    aire_1.addEventListener("change", function() {
        if (this.value !== '') {
            aire_2.disabled= false;
            aire_2.style.display = 'block';
            aire2.style.display = 'block';
        } else {
            aire_2.disabled = true;
            aire_2.style.display = 'none';
            aire2.style.display = 'none';
        }
    });
    freidora.addEventListener("change", function() {
        if (this.value === 'si') {
            freidora_1.disabled= false;
            freidora_1.style.display = 'block';
            freidora1.style.display = 'block';
        } else {
            freidora_1.disabled = true;
            freidora_1.style.display = 'none';
            freidora1.style.display = 'none';
        }
    });
    licuadora.addEventListener("change", function() {
        if (this.value === 'si') {
            licuadora_1.disabled= false;
            licuadora_1.style.display = 'block';
            licuadora1.style.display = 'block';
        } else {
            licuadora_1.disabled = true;
            licuadora_1.style.display = 'none';
            licuadora1.style.display = 'none';
        }
    });
    ventilador.addEventListener("change", function() {
        if (this.value === 'si') {
            ventilador_1.disabled= false;
            ventilador_1.style.display = 'block';
            ventilador1.style.display = 'block';
        } else {
            ventilador_1.disabled = true;
            ventilador_1.style.display = 'none';
            ventilador1.style.display = 'none';
        }
    });
    ventilador_1.addEventListener("change", function() {
        if (this.value !== '') {
            ventilador_2.disabled= false;
            ventilador_2.style.display = 'block';
            ventilador2.style.display = 'block';
        } else {
            ventilador_2.disabled = true;
            ventilador_2.style.display = 'none';
            ventilador2.style.display = 'none';
        }
    });
    arroz.addEventListener("change", function() {
        if (this.value === 'si') {
            arroz_1.disabled= false;
            arroz_1.style.display = 'block';
            arroz1.style.display = 'block';
        } else {
            arroz_1.disabled = true;
            arroz_1.style.display = 'none';
            arroz1.style.display = 'none';
        }
    });
    arroz_1.addEventListener("change", function() {
        if (this.value !== '') {
            arroz_2.disabled= false;
            arroz_2.style.display = 'block';
            arroz2.style.display = 'block';
        } else {
            arroz_2.disabled = true;
            arroz_2.style.display = 'none';
            arroz2.style.display = 'none';
        }
    });    
});