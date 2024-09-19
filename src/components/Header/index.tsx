import Image from "next/image";
import style from "./page.module.css"

export default function Header() {
    return (
        <header className={style.header_container}>
            <div className={style.header_elements}>
                <div className={style.logo_container}>
                    <Image src={"./Shape.svg"} width={33.17} height={33} alt="Logo" />
                    <p className={style.logo_text}>FocalPoint</p>
                </div>
                <h1 className={style.title}>Bem-vindo de volta, Marcus</h1>
                <p className={style.date_text}>Segunda, 01 de dezembro de 2025</p>
            </div>
        </header>
    )
}