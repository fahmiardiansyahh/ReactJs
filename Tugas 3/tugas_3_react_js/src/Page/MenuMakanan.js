import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pesan : 0
		}

		this.rubahPesanan = this.rubahPesanan.bind(this);
		this.pesanan = this.pesanan.bind(this);
	}

	rubahPesanan() {

		this.setState((state,props)=>{
			return {
				pesan : state.pesan
			};
		})

	}

	pesanan(e){
		console.log(e.target.value);
	}



	// render
	render() {
		return(

			<div>
				<h3> Daftar Makanan Yang Disediakan </h3>
				<table>
				<tbody>
					<tr>
						<td> <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
						<center>
							<button type="button" onClick={  this.rubahPesanan } value="nasi Padang"> Pesan Sekarang </button>
						</center>
						 </td>
						<td> <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
						<center>
							<button type="button" onClick={ this.rubahPesanan }> Pesan Sekarang </button>
						</center>
						 </td>
						<td> <ListMakanan gambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
						<center>
							<button type="button" onClick={ this.rubahPesanan }> Pesan Sekarang </button>
						</center>
						 </td>
						<td> <ListMakanan gambar = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
						<center>
							<button type="button" onClick={ this.rubahPesanan }> Pesan Sekarang </button>
						</center>
						 </td>
						<td> <ListMakanan gambar = "https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg

" />
						<center>
							<button type="button" onClick={ this.rubahPesanan }> Pesan Sekarang </button>
						</center>
						 </td>
					</tr>
				</tbody>
				</table>
				<br/>
				<input type="text" onChange={ this.pesanan } placeholder="Masukan Pesanan Anda" />
				<h3> Pesanan Anda : { this.state.pesan } </h3>
			</div>

		);
	}

}

export default MenuMakanan;