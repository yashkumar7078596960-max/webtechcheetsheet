function Whatsapp() {

    function openWhatsapp() {

        window.open(
            "https://wa.me/917078596960?text=Hello%20CodeLearn",
            "_blank"
        );

    }

    return (
        <button
            className="whatsapp"
            onClick={openWhatsapp}
        >
            WhatsApp
        </button>
    );
}

export default Whatsapp;
