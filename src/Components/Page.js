import Header from "./Header";
import { Card } from "./Card";
import data from '../data.js'
import '../styles/page.css'

function Page() {
    const cards = data.map(item => {
        return (
            <Card
                key = {item.id}
                title = {item.title}
                location = {item.location}
                url = {item.googleMapsUrl}
                startDate = {item.startDate}
                endDate = {item.endDate}
                description = {item.description}
                image = {item.imageUrl}
            />
        )
    })

    return (
        <div className="page">
            <Header />
            <main>{cards}</main>
        </div>
    )
}
export default Page