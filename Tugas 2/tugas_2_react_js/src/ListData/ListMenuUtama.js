import React, { Component } from 'react';

class ListMenuUtama extends Component {

	render () {

		return(

				<div>

					<h1>  
						<center>
						Selamat Datang Di Warung Nusantara 
						</center>
						
						<center>
							<img src={this.props.gambar} alt="Masakan Nusantara" width="600" />
						</center>

				 	</h1>

				</div>
		);

	}

}

export default ListMenuUtama;