const produk = [
    {
        id_produk: 1,
        nama_produk: 'Huawei P30 pro'
    },
    {
        id_produk: 2,
        nama_produk: 'Huawei Nova 5T'
    },
];

const stok_produk = [
    {
        id_produk: 1,
        qty: 15
    },
    {
        id_produk: 1,
        qty: 6
    },
    {
        id_produk: 2,
        qty: 4
    },
    {
        id_produk: 2,
        qty: 18
    },

]

function getData (produk, stok) {
    let result = []
    let total1 = 0
    let total2 = 0
    let data1 = {
        "nama_produk" : "",
        "total_stock" : 0
    }
    let data2 = {
        "nama_produk" : "",
        "total_stock" : 0
    }
    for(let i = 0; i<stok.length; i++) {
        if(stok[i].id_produk === 1) {
            total1 = total1 +stok[i].qty
        } else if ( stok[i].id_produk === 2) {
            total2 = total2 + stok[i].qty
        }
    }

    for(let i = 0; i< produk.length; i++) {
        if(produk[i].id_produk === 1) {
            data1.nama_produk = produk[i].nama_produk
            data1.total_stock = total1
        } else if( produk[i].id_produk === 2) {
            data2.nama_produk = produk[i].nama_produk
            data2.total_stock = total2
        }
    }
    result.push(data1)
    result.push(data2)

    return result
}

console.log(getData(produk, stok_produk))