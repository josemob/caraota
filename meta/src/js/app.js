const provider = new ethers.providers.Web3Provider(
    window.ethereum,
    "any"
);

let userAddress = '';
let signer = {};
let iflogin = false; 
let network = {};
var alertPlaceholder = document.getElementById("liveAlertPlaceholder");

async function login() {

  await provider.send("eth_requestAccounts", [])
  			  .then((result) => {
  			  	iflogin = true;
   			    signer = provider.getSigner();
                Swal.fire(
                  'Good job!',
                  'You have successfully logged in.!',
                  'success'
                )
			  })
			  .catch((error) => {
			    if (error.code === 4001) {
			    	Swal.fire(
                      'Ops...!',
                      error.message,
                      'error'
                    )
			    }
			  });
			  
	if (iflogin) {
		userAddress = await signer.getAddress();
        const balance = await provider.getBalance(userAddress);
        network = await provider.getNetwork();


        if (network.chainId !== 97 && network.chainId !== 56) {
		    await ethereum.request({ method: 'wallet_switchEthereumChain', params:[{chainId: '0x61'}]});
        }

        document.getElementById("walletSend").value = userAddress;
        document.getElementById("wallet").innerHTML = userAddress.substring(0,5) +'..'+userAddress.substr(userAddress.length - 4);
        document.querySelector(".formulario").classList.remove("d-none");
        document.querySelector(".info").classList.remove("d-none");
        document.getElementById("btnGet").removeAttribute("disabled");
        setTimeout(()=>{
            alertPlaceholder.innerHTML = '';
        },2000);
        
	}
}

login();

function alerta(message, type) {
  var wrapper = document.createElement("div");
  wrapper.innerHTML =
    '<div class="alert alert-' +
    type +
    ' alert-dismissible" role="alert">' +
    message +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

  alertPlaceholder.append(wrapper);
}