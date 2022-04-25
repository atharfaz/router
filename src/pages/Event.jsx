import React, { Component } from "react";
import $ from "jquery";
import CardAgenda from "./cardAgenda"

class Event extends Component {
    constructor() {
        super()
        this.state = {
            agenda: [
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",
                },
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",
                },
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",
                },
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",
                },
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",
                },
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",
                },
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",
                },
                {
                    judul: "Hari Bunga Sedunia",
                    tanggal: "03 - 01 - 2005",

                },
            ],
            judul: "",
            tanggal: "",
            selectedItem: null,
        }
        this.state.filteragenda = this.state.agenda
    }

    render() {
        return (
            <div className="container" >
                <h1 className="font-bold text-center">Agenda Lingkungan</h1>
                <center><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full shadow-lg mt-10" onClick={() => this.Add()}> ADD Agenda </button></center>
                <div className="grid grid-cols-4 gap-4">
                    {this.state.filteragenda.map((item, index) => (
                        <CardAgenda
                            judul={item.judul}
                            tanggal={item.tanggal}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>
                <div className="modal shadow-lg" id="add_agenda">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                <div className="font-bold text-center ">Form Buku</div>
                            </div>
                            {/* modal body */}
                            <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    <div className="font-bold  ">Judul</div>
                                    <input type="text" className="form-control mb-2"

                                        value={this.state.judul}
                                        onChange={ev => this.setState({
                                            judul:
                                                ev.target.value
                                        })}
                                        required />
                                    <div className="font-bold  ">Tanggal</div>
                                    <input type="date" className="form-control mb-2"

                                        value={this.state.tanggal}
                                        onChange={ev => this.setState({
                                            tanggal:
                                                ev.target.value
                                        })}
                                        required />
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full shadow-lg mt-3 ml-40" type="submit">

                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

    Add = () => {
        // menampilkan komponen modal
        $("#add_agenda").show()
        this.setState({
            isbn: Math.random(1, 10000000),
            judul: "",
            tanggal: "",
            action: "insert"
        })
    }
    Save = (event) => {
        event.preventDefault();

        let tempagenda = this.state.agenda

        if (this.state.action === "insert") {

            tempagenda.push({

                judul: this.state.judul,
                tanggal: this.state.tanggal


            })
        } else if (this.state.action === "update") {

            let index = tempagenda.indexOf(this.state.selectedItem)

            tempagenda[index].judul = this.state.judul
            tempagenda[index].tanggal = this.state.tanggal
        }
        this.setState({ buku: tempagenda })
        // menutup komponen modal_buku
        $("#add_agenda").hide()
    }
    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if (window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
            // menghapus data
            let tempagenda = this.state.agenda
            // posisi index data yg akan dihapus
            let index = tempagenda.indexOf(item)
            // hapus data
            tempagenda.splice(index, 1)
            this.setState({ buku: tempagenda })
        }
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#add_agenda").show()
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            tanggal: item.tanggal,
            action: "update",
            selectedItem: item
        })
    }
}

export default Event;