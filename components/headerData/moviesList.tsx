
import data from "../../src/app/headerData.json"
import { DropdownItem } from "@nextui-org/react"




const movieList: JSX.Element[] = []

data.moviesExplore.map((title,index) => (
    movieList.push(<DropdownItem id={`exp${index + 1}`} key={`exp${index + 1}`} >{title}</DropdownItem>)
))
data.moviesCategoriesLT.map((title, index) => (
    movieList.push(<DropdownItem id={`catLT${index + 1}`} key={`cl${index + 1}`} >{title}</DropdownItem>)
))
data.moviesCategoriesRT.map((title, index) => (
    movieList.push(<DropdownItem id={`catRT${index + 1}`} key={`cr${index + 1}`} >{title}</DropdownItem>)
))

export default movieList



