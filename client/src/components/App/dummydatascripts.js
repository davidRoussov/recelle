let data = '';
for (let i = 10158; i < 10217; i++) {
	data += `
  	{
    	packetID: '${i}',
      dateAdded: '2017-10-${Math.floor(Math.random() * 10)}'
      lastScanned: '2017-10-${Math.floor(Math.random() * 10)}'
      rating: '${Math.floor(Math.random())}'
    }
  `;
}

console.log(data)