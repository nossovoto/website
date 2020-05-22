import { FC } from "react"
import { IiconProps } from "./props/iconInterface"
import style from "./props/icon.module.scss"

const UpArrowIcon: FC<IiconProps> = ({ height, width }) => (
  <svg
    height={height ? `${height}px` : "24px"}
    width={width ? `${width}px` : "24px"}
    className={style.fill_grey}
    viewBox="0 0 24 24"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z" />
  </svg>
)

export default UpArrowIcon