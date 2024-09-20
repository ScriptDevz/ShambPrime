import data from "../../src/app/headerData.json"
import { DropdownItem } from "@nextui-org/react"

const downloadList: JSX.Element[] = []


downloadList.push(<DropdownItem id="downloadApp1" key={"downloadApp1"}>Get the App</DropdownItem>)
    data.downloadApp.map((item, index) => (
        downloadList.push(
            <DropdownItem id={`downloadApp${index + 2}`} key={`downloadApp${index + 2}`}>
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

    downloadList.push(<DropdownItem id="downloadPro1" key={"downloadPro1"}>Shamb Prime Pro Download</DropdownItem>)
    data.downloadPro.map((item, index) => (
        downloadList.push(
            <DropdownItem id={`downloadPro${index + 2}`} key={`downloadPro${index + 2}`}>
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


export default downloadList