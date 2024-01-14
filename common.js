const getPoems = async () => {
    return [
        {
            "author": "Nguyễn Thế Thủ",
            "content": "Thu đến tây nguyên tuyết trời mưa.\nNắng vàng nhạt nhạt nắng lưa thưa.\nHoàng hôn đi vắng đâu thấy nữa.\nChờ nàng Thơ đến gió đung đưa.",
            "is_verified": true,
            "key": "241fz9zstwby",
            "title": "Thu Tây Nguyên"
        },
        {
            "author": "Nguyễn Thế Thủ",
            "content": "Con đò bình thủy còn đưa\nDòng sông vẫn đợi người xưa vẫn chờ\nAnh về cho đẹp giấc mơ\nCủa người em gái bên bờ sông hương\n\nRồi có mùa xuân nào hoa không nở\nCó tâm sự nào buồn như đêm mưa\nCó mùa đông nào không giá lạnh\nThì biết tình yêu mấy cho vừa.",
            "is_verified": true,
            "key": "ehwyzxaywb57",
            "title": "Thơ Bốn Thủ"
        },
        {
            "author": "Nguyễn Thế Thủ",
            "content": "Mừng ngày hôn lễ Thủy Khôi.\nTrăm năm hạnh phúc đẹp đôi duyên lành.\nCô, Dì, Cậu, Chú, Em Anh.\nChúc cho đôi trẻ vạn thành bền lâu.\nVợ Chồng ý hợp tâm đầu.\nThuận hòa trên dưới sang giàu khó chi.\nTrai hiếu thảo, gái nhu mì.\nƠn cha, nghĩa mẹ khắc ghi tạc lòng.",
            "is_verified": true,
            "key": "nv64cerwvaju",
            "title": "Tặng ngày tân hôn Thủy - Khôi"
        },
        {
            "author": "Nguyễn Thế Thủ",
            "content": "Thiên đàng anh đến thiên đàng.\nHàng ngàn hoa trắng biển ngàn đê mê.\nSóng đùa, sóng hát, xuân về.\nGió lùa trên mái tóc thề người thương.\nXanh xanh thẳng tắp hàng dương.\nNắng vàng soi lối bước đường em đi.\nĐẹp xinh gái quảng xuân thùy.\nSay lòng viễn khách nở đi sao đành.\n\n\n",
            "is_verified": true,
            "key": "zd8qy36f2bc5",
            "title": "Về thiên đàng"
        },
        {
            "author": "Nguyễn Thế Thủ",
            "content": "Anh về quê mới huyện Krông na\nYêu quá Hồ Sen bóng chiều tà\nBến hiền chim đậu hót vang ca\nThư giãn ly cà phê buổi sáng.\nĐắk Lắk hồn nhiên Krông Ana\nCây trái xum xuê rợp bóng cà\nĐồng xanh bát ngát hương ngào ngạt\nMùa vàng thu hoạch chở về nhà.\nÔi dòng sông Na Dòng sông Na\nLục bình trôi nổi đầy tôm cá\nXa xa tam bản con thuyền lá\nChở khách thập phương đến Nam Ca.\nĐưa em về thăm thác A na\nThiên nhiên hùng vĩ đẹp bao la\nMột rừng sinh thái xanh hoa lá\nQuyện khói sương bay tỏa thác ngà.\nQuê mới tôi ơi ! đất yêu người\nNgười yêu đất lắm bao khát vọng\nGiữa trời Sông Núi đầy nhựa sống.\nCho đời tự tại được thảnh thơi.\nMười năm xa vắng bóng Cố Nhân\nTrút nỗi bâng khuâng xuống đường Trần.\nTìm đâu ra được người tri kỷ\nGửi chút thương lòng nỗi cô đơn .",
            "is_verified": true,
            "key": "zd8qy36f2bc5",
            "title": "Quê Mới"
        }
    ]
}

const addBreaks = (lines) => {
    let poem = "";
    for (let i = 0; i < lines.length; i++) {
        poem += lines[i] + "<br>"
    }
    return poem;
}

let index = 0;
const typing = (poem, verses) => {
    setTimeout(() => {
        if (index === poem.length) return;
        if (poem[index] === '<') index += 2;
        verses.innerHTML = poem.slice(0, index);
        index++;
        typing(poem, verses);
    }, 50);
}

const getPoem = async () => {
    const poems = await getPoems();

    if (poems.length > 0) {
        const randomIndex = Math.floor(Math.random() * poems.length);
        return poems[randomIndex];
    } else {
        return null;
    }
}
