import "./../../public/styles.css";

function Footer(){
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    retrun (
        <div className="footer">
            <p className="p"> Copyright © {currentYear}</p>
        </div>
    );
}

export default Footer;