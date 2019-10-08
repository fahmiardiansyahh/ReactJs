import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pesan : "" , 
			jumlah : 0 ,
			status : false,
			value : ""
		}

		// Bind
		this.nasipadang = this.nasipadang.bind(this);
		this.sate = this.sate.bind(this);
		this.sotolamongan = this.sotolamongan.bind(this);
		this.nasikentut = this.nasikentut.bind(this);
		this.nasikuning = this.nasikuning.bind(this);
		this.pilihPesanan = this.pilihPesanan.bind(this);
		this.batalPesanan = this.batalPesanan.bind(this);
	}

	pilihPesanan(value,e) {
		this.setState({
			[value] : e.target.value , 
			status : true
		});
	}

	nasipadang() {
		this.setState({
			pesan : "Nasi Padang" ,
			jumlah : this.state.jumlah + 1,
			status : true
		});	
	}

	sate() {
		this.setState({
			pesan : "Sate" ,
			jumlah : this.state.jumlah + 1,
			status : true
		});	
	}

	sotolamongan() {
		this.setState({
			pesan : "Soto Lamongan" ,
			jumlah : this.state.jumlah + 1,
			status : true
		});	
	}

	nasikentut() {
		this.setState({
			pesan : "Nasi Kentut" ,
			jumlah : this.state.jumlah + 1,
			status : true
		});	
	}

	nasikuning() {
		this.setState({
			pesan : "Nasi Kuning" ,
			jumlah : this.state.jumlah + 1,
			status : true
		});	
	}

	// Batal
	batalPesanan() {
		this.setState({
			pesan : "" ,
			jumlah : 0,
			status : false
		});	
	}

	render() {
		return(

			<div>
					<h3> Daftar Makanan Yang Di Sediakan :</h3>

			<table>
				<tbody>	
					<tr>	
						<td>
						<ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
						<center>
							<button onClick={ this.nasipadang } > Pesan Sekarang </button>
						</center>
						</td>

						<td>
						<ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
						<center>
							<button onClick={ this.sate}> Pesan Sekarang </button>
						</center>
						</td>

						<td>
						<ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
						<center>
							<button onClick={ this.sotolamongan }> Pesan Sekarang </button>
						</center>
						</td>

						<td>
						<ListMakanan gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"/>
						<center>
							<button onClick={ this.nasikentut }> Pesan Sekarang </button>
						</center>
						</td>

						<td>
						<ListMakanan gambar="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg"/>
						<center>
							<button onClick={ this.nasikuning }> Pesan Sekarang </button>
						</center>
						</td>
					</tr>
				</tbody>
			</table>
			<br/>
			<input type = "text" placeholder="Masukan Pesanan Anda" value={this.state.pesan} onChange = { (e) => this.pilihPesanan("pesan",e) } />
			<input type ="number" placeholder="Jumlah Pesanan" onChange={ (e) =>this.pilihPesanan("jumlah",e) } value={this.state.jumlah} />
			<button onClick={ this.batalPesanan }> Batalkan Semua Pesanan </button>

				{ this.state.status  ? (
					<div>
					<h3>Pesanan Anda : { this.state.pesan } </h3> 
					<h4>Jumlah Pesanan : { this.state.jumlah} </h4>
					</div>
				) : (
			
					<h3>
						<center>
						Anda Belum Memesan Makanan
						</center>
					</h3>
			
				) }



			</div>



		);
	}

}

export default MenuMakanan;