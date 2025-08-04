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
});