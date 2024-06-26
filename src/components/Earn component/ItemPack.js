import Itemview from "./Itemview";

const Itempack =( ) => {
    return <div >
        <div className="item-list-part-description">
            part
        </div>
        <div className="item-list-part">
            <Itemview detailInfo="hey you what's up" titleInfo="quest"/>
            <Itemview detailInfo="hey you what's up" titleInfo="quest"/>
        </div>
    </div>
}


export default Itempack;