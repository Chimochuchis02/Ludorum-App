function sendToWhatsapp() {
    const phone = "528711324475";
    const name = document.getElementById('wa-business').value;
    const description_Products = document.getElementById('wa-products').value;
    const selected_plan = document.getElementById('wa-plan').value;
    const description = document.getElementById('wa-description').value;

    if (name === "") {
        alert("¡El nombre es un campo obligatorio, por favor llenelo!");
        return;
    }

    if (description_Products === "") {
        alert("¡El campo de la descripcion de productos es obligatoria, por favor llenelo!");
        return;
    }

    if (selected_plan === "") {
        alert("¡El campo seleccionado del plan es obligatorio, por favor llenelo!");
        return;
    }

    if (description === "") {
        alert("¡El campo de la descripcion ya sea de sus dudas o preguntas es obligatorio, por favor llenelo!");
        return;
    }

    const message = '¡Hola!, nuestra empresa se llama ${name}, nuestro de negocio es de: ${description_Products}, el plan que seleccionamos y nos interesa es el de ${selected_plan}, y quisieramos saber mas sobre: ${description}.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
}