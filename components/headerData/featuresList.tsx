import data from "../../src/app/headerData.json"
import { DropdownItem } from "@nextui-org/react"

const featuresList: JSX.Element[] = []






featuresList.push(
    <DropdownItem id={"all1"} key={"all1"}>ShambPrime for All</DropdownItem>
)
data.featureAll.map((item, index) => (
    featuresList.push(
        <DropdownItem id={`all${index + 2}`} key={`feature${index + 2}`}>
            <div className="dd-card-container">
                <div className="dd-card-icon">
                    Icon
                </div>
                <div className="dd-card-text">
                    <div className="dd-card-text-title">
                        {item[1]}
                    </div>
                    <div className="dd-card-text-body">
                        {item[2]}
                    </div>
                </div>
            </div>
        </DropdownItem>
    )
))
featuresList.push(
    <DropdownItem id={"pro1"} key={"pro1"}>ShambPrime for Pros</DropdownItem>
)
data.featurePro.map((item, index) => (
    featuresList.push(
        <DropdownItem id={`pro${index + 2}`} key={`feature${index + 2}`}>
            <div className="dd-card-container">
                <div className="dd-card-icon">
                    Icon
                </div>
                <div className="dd-card-text">
                    <div className="dd-card-text-title">
                        {item[1]}
                    </div>
                    <div className="dd-card-text-body">
                        {item[2]}
                    </div>
                </div>
            </div>
        </DropdownItem>
    )
))

export default featuresList