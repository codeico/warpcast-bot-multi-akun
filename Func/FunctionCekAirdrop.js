const _0x921f98 = _0x3ae9;
(function (_0x532757, _0xe1a4c4) {
  const _0x5387f4 = _0x3ae9,
    _0x14c76a = _0x532757();
  while (!![]) {
    try {
      const _0x118ccd =
        (parseInt(_0x5387f4(0x18e)) / 0x1) *
          (-parseInt(_0x5387f4(0x180)) / 0x2) +
        (-parseInt(_0x5387f4(0x184)) / 0x3) *
          (-parseInt(_0x5387f4(0x16c)) / 0x4) +
        -parseInt(_0x5387f4(0x183)) / 0x5 +
        (-parseInt(_0x5387f4(0x18b)) / 0x6) *
          (-parseInt(_0x5387f4(0x189)) / 0x7) +
        (parseInt(_0x5387f4(0x175)) / 0x8) *
          (-parseInt(_0x5387f4(0x16e)) / 0x9) +
        (-parseInt(_0x5387f4(0x192)) / 0xa) *
          (parseInt(_0x5387f4(0x17b)) / 0xb) +
        (-parseInt(_0x5387f4(0x188)) / 0xc) *
          (-parseInt(_0x5387f4(0x16d)) / 0xd);
      if (_0x118ccd === _0xe1a4c4) break;
      else _0x14c76a["push"](_0x14c76a["shift"]());
    } catch (_0x2eaf82) {
      _0x14c76a["push"](_0x14c76a["shift"]());
    }
  }
})(_0x2599, 0x40b17);
function _0x2599() {
  const _0x13a240 = [
    "blueBright",
    "189338APGEoF",
    "postUrl",
    "message",
    "embeds",
    "10uyQRro",
    "buttons",
    "map",
    "title",
    "alamat",
    "44224zhNCya",
    "559ogbfYF",
    "132453iojKRp",
    "cast-frame-action",
    "errors",
    "&username=",
    "log",
    "Masukkan\x20pilihan\x20buttonnya:\x20",
    "redBright",
    "8ihmITM",
    "text",
    "error",
    "openGraph",
    "greenBright",
    "question",
    "2364901JNUaYY",
    "get",
    "Pilihan\x20tidak\x20valid.\x20Index\x20tidak\x20ditemukan.",
    "index",
    "data",
    "4OIiaml",
    "forEach",
    "post",
    "2594870nmuPHV",
    "36KkEtCe",
    "nama",
    "urls",
    "result",
    "324516lBaadB",
    "70STdTgU",
    "frame",
    "58092huUWne",
    "type",
  ];
  _0x2599 = function () {
    return _0x13a240;
  };
  return _0x2599();
}
function _0x3ae9(_0x104904, _0x1724fc) {
  const _0x259911 = _0x2599();
  return (
    (_0x3ae9 = function (_0x3ae991, _0x401857) {
      _0x3ae991 = _0x3ae991 - 0x169;
      let _0x200b5d = _0x259911[_0x3ae991];
      return _0x200b5d;
    }),
    _0x3ae9(_0x104904, _0x1724fc)
  );
}
import _0x4f767e from "axios";
import { BaseUrl } from "../userPK.js";
import _0x4c2ab3 from "chalk";
import _0x28b44a from "readline-sync";
export async function CekAirdrop(_0x1e1874, _0x469aba, _0x5b5c17) {
  const _0xbaff24 = _0x3ae9;
  try {
    const _0x14a8df = await _0x4f767e[_0xbaff24(0x17c)](
        BaseUrl +
          "user-thread-casts?castHashPrefix=" +
          _0x5b5c17 +
          _0xbaff24(0x171) +
          _0x469aba +
          "&limit=2",
        { headers: { Authorization: _0x1e1874 } }
      ),
      _0x4a430d = _0x14a8df[_0xbaff24(0x17f)][_0xbaff24(0x187)]["casts"][0x1];
    console[_0xbaff24(0x172)](
      "=================================================================="
    ),
      console[_0xbaff24(0x172)](
        _0x4c2ab3[_0xbaff24(0x179)](_0x4a430d[_0xbaff24(0x176)])
      ),
      console[_0xbaff24(0x172)](
        "=================================================================="
      );
    const _0x4fdc5f = _0x4a430d["hash"];
    let _0x38e8df =
      _0x4a430d[_0xbaff24(0x191)]["urls"][0x0][_0xbaff24(0x178)][
        _0xbaff24(0x18a)
      ][_0xbaff24(0x18f)];
    const _0x3cfc88 = _0x4a430d[_0xbaff24(0x191)][_0xbaff24(0x186)][0x0][
      _0xbaff24(0x178)
    ][_0xbaff24(0x18a)]["buttons"][_0xbaff24(0x169)]((_0x5b84ac) => ({
      index: _0x5b84ac["index"],
      title: _0x5b84ac[_0xbaff24(0x16a)],
    }));
    for (let _0x40e5d1 of _0x3cfc88) {
      console["log"](
        _0x4c2ab3[_0xbaff24(0x174)](
          "[" + _0x40e5d1[_0xbaff24(0x17e)] + "]",
          _0x40e5d1[_0xbaff24(0x16a)]
        )
      );
    }
    const _0x51fbbb = _0x28b44a["question"](
        _0x4c2ab3[_0xbaff24(0x18d)]("Masukkan\x20pilihan\x20buttonnya:\x20")
      ),
      _0x3dd62e = _0x3cfc88["find"](
        (_0xab770b) => "" + _0xab770b[_0xbaff24(0x17e)] === _0x51fbbb
      );
    if (_0x3dd62e) {
      let _0x28978e = !![];
      while (_0x28978e) {
        try {
          const _0x2d182d = {
              castHash: _0x4fdc5f,
              framePostUrl: _0x38e8df,
              frameActionIndex: _0x51fbbb,
            },
            _0x1356ac = await _0x4f767e[_0xbaff24(0x182)](
              BaseUrl + _0xbaff24(0x16f),
              _0x2d182d,
              { headers: { Authorization: _0x1e1874 } }
            );
          _0x38e8df =
            _0x1356ac[_0xbaff24(0x17f)][_0xbaff24(0x187)][_0xbaff24(0x18a)][
              _0xbaff24(0x18f)
            ];
          const _0x5ad8e7 = _0x1356ac[_0xbaff24(0x17f)][_0xbaff24(0x187)][
            _0xbaff24(0x18a)
          ][_0xbaff24(0x193)][_0xbaff24(0x169)]((_0x4ae124) => ({
            index: _0x4ae124["index"],
            title: _0x4ae124[_0xbaff24(0x16a)],
            type: _0x4ae124[_0xbaff24(0x18c)],
          }));
          _0x5ad8e7[_0xbaff24(0x181)]((_0x35dae5) => {
            const _0x12c957 = _0xbaff24;
            console[_0x12c957(0x172)](
              _0x4c2ab3[_0x12c957(0x179)](
                "[" + _0x35dae5[_0x12c957(0x17e)] + "]",
                _0x35dae5[_0x12c957(0x16a)]
              )
            );
            const _0x3f81f0 = _0x28b44a[_0x12c957(0x17a)](
              _0x4c2ab3[_0x12c957(0x18d)](_0x12c957(0x173))
            );
          });
        } catch (_0x46ec61) {
          console["log"](
            _0x46ec61["response"][_0xbaff24(0x17f)][_0xbaff24(0x170)]
          ),
            (_0x28978e = ![]);
        }
      }
    } else
      console[_0xbaff24(0x172)](_0x4c2ab3[_0xbaff24(0x174)](_0xbaff24(0x17d)));
  } catch (_0x6fac0f) {
    console[_0xbaff24(0x177)](
      _0x4c2ab3[_0xbaff24(0x174)]("Error:", _0x6fac0f[_0xbaff24(0x190)])
    );
  }
}
CekAirdrop(_0x921f98(0x185), _0x921f98(0x16b));
