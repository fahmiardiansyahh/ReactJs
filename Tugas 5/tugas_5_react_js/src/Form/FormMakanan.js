import React, { Component } from "react";

class FormMakanan extends Component {
	constructor(props){
		super(props);
		this.state = {
			pesanan : "",
			jumlah : ""
		}
	this.handleSubmit = this.handleSubmit.bind(this);
	this.pesananValue = this.pesananValue.bind(this);
	this.jumlahPesanan = this.jumlahPesanan.bind(this);
	this.pesan = React.createRef();
	}

	handleSubmit(e) {
		e.preventDefault();
		alert("Pesanan Anda Adalah : " + this.state.pesanan + " | Jumlah : " + this.state.jumlah);
		this.setState({
			pesanan : "",
			jumlah : ""
		})
		this.pesan.current.focus();
	}

	pesananValue(e) {
		const val = e.target.value;
		this.setState((state,props) => {
			return {
				pesanan : val
			};
		});
	}

	jumlahPesanan(e) {
		this.setState({
			jumlah : e.target.value
		});
	}

	render() {

		return(

			<div>
				<center>
				<form onSubmit = { this.handleSubmit } >
					<input type = "text" placeholder = "Masukan Pesanan Anda" onChange = { this.pesananValue } value={ this.state.pesanan } ref = { this.pesan } />
					<input type = "number" placeholder = "Masukan Jumlah Pesanan Anda" onChange={ this.jumlahPesanan } value = { this.state.jumlah } /> 
					<br/> <br/>
					<button type="submit" name="submit"> Pesan </button>
				</form>
				</center>
			</div>

		);

	}
}

export default FormMakanan;