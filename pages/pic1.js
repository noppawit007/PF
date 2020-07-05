
export default function Home ()  {

    const myarray = i => <div>pic {i} </div>
    let url = ['https://cdn.stocksnap.io/img-thumbs/960w/tropical-beach_9FM2TZZYP4.jpg','https://cdn.stocksnap.io/img-thumbs/960w/beach-aerial_NPCFR4GDNF.jpg']
    return (
        <div>
            Hello
            <ul>
            {
                url.map(item => {
                    return (<li>{item}</li>)
                })
            }
            </ul>
        </div>
    )
}
