function FindClientProxy(url, host) {
	return "DIRECT";
}

function FindServerProxy(url, host) 
{
 return "PROXY 10.209.116.143:8080"; 
} 
function FindProxyForURL(url, host) {
	if (shExpMatch(host, "stg1.pwsmobilesaml.net")) {
		return "DIRECT";
	}
	else 	if (shExpMatch(host, "14.97.6.236")) {
		return "DIRECT";
	}
	else {
		return FindServerProxy(url, host);
	}
}
