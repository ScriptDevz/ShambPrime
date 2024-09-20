import data from "../../src/app/headerData.json"
import { DropdownItem } from "@nextui-org/react"

const tvList: JSX.Element[] = []


data.tvExplore.map((title, index) => (
    tvList.push(<DropdownItem id={`tvExp${index + 1}`} key={`tvExp${index + 1}`} >{title}</DropdownItem>)
))
data.tvFeatured.map((title, index) => (
    tvList.push(<DropdownItem id={`tvFeature${index + 1}`} key={`tvFeature${index + 1}`} >{title}</DropdownItem>)
))
data.tvCategoriesLT.map((title, index) => (
    tvList.push(<DropdownItem id={`tvCatLT${index + 1}`} key={`tvCatLT${index + 1}`} >{title}</DropdownItem>)
))
data.tvCategoriesRT.map((title, index) => (
    tvList.push(<DropdownItem id={`tvCatRT${index + 1}`} key={`tvCatRT${index + 1}`} >{title}</DropdownItem>)
))

export default tvList