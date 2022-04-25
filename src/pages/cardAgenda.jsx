import React from "react"
class Card extends React.Component {
    render() {
        return (
            <div className="flex flex-nowrap mt-10 shrink-0 w-full">
                <div className="flex flex-nowrap mt-10 shrink-0 w-full ">
                    <div className="outline-blue-500 w-64 shadow-lg  p-3 rounded-2">
                        <div className="pl-2 font-semibold">{this.props.judul}</div>
                        <div className="pl-2 font-light">{this.props.tanggal}</div>
                        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded-full mt-4 w-12s text-center " onClick={this.props.onEdit} >UBAH</div>
                        <div className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded-full mt-2 w-12s text-center " onClick={this.props.onDrop}>HAPUS</div>

                    </div>
                </div>
            </div >
        )
    }
}
export default Card;