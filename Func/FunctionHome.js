function _0x4be7() {
  const _0x4912c6 = [
    "map",
    "cast",
    "post",
    "feed-items",
    "398VFPpGz",
    "1053Dxnnub",
    "response",
    "author",
    "slice",
    "14xzoLcD",
    "log",
    "home",
    "6150795FoaSwF",
    "recasts",
    "entries",
    "2546484cMPrfY",
    "hash",
    "135CuUWUB",
    "put",
    "990335FBmUXy",
    "5997808iMtXwL",
    "51896010kbdOsK",
    "sukses\x20recash",
    "data",
    "Akun",
    "authorUsername",
    "greenBright",
    "cast-likes",
    "cast-attachments",
    "775912xRuKRc",
    "items",
  ];
  _0x4be7 = function () {
    return _0x4912c6;
  };
  return _0x4be7();
}
function _0x4e9d(_0x13f521, _0x5c699d) {
  const _0x4be7ae = _0x4be7();
  return (
    (_0x4e9d = function (_0x4e9d72, _0x178d1a) {
      _0x4e9d72 = _0x4e9d72 - 0xd6;
      let _0x117ae8 = _0x4be7ae[_0x4e9d72];
      return _0x117ae8;
    }),
    _0x4e9d(_0x13f521, _0x5c699d)
  );
}
(function (_0x307e64, _0x5797fb) {
  const _0x10c8c8 = _0x4e9d,
    _0x2625d5 = _0x307e64();
  while (!![]) {
    try {
      const _0x3e2992 =
        parseInt(_0x10c8c8(0xef)) / 0x1 +
        (parseInt(_0x10c8c8(0xe0)) / 0x2) * (parseInt(_0x10c8c8(0xe1)) / 0x3) +
        parseInt(_0x10c8c8(0xf0)) / 0x4 +
        parseInt(_0x10c8c8(0xe8)) / 0x5 +
        (parseInt(_0x10c8c8(0xeb)) / 0x6) * (parseInt(_0x10c8c8(0xe5)) / 0x7) +
        (-parseInt(_0x10c8c8(0xda)) / 0x8) *
          (-parseInt(_0x10c8c8(0xed)) / 0x9) +
        -parseInt(_0x10c8c8(0xf1)) / 0xa;
      if (_0x3e2992 === _0x5797fb) break;
      else _0x2625d5["push"](_0x2625d5["shift"]());
    } catch (_0x264e63) {
      _0x2625d5["push"](_0x2625d5["shift"]());
    }
  }
})(_0x4be7, 0xdcab1);
import _0x38c614 from "axios";
import { BaseUrl } from "../userPK.js";
import _0x4a9da9 from "chalk";
export async function HOME(_0x8ea31c, _0x424aef) {
  const _0x56bd08 = _0x4e9d,
    _0x2781a7 = {
      feedKey: _0x56bd08(0xe7),
      viewedCastHashes: "",
      updateState: !![],
    },
    _0x3fc15b = await _0x38c614[_0x56bd08(0xde)](
      BaseUrl + _0x56bd08(0xdf),
      _0x2781a7,
      { headers: { Authorization: _0x8ea31c } }
    ),
    _0x5580b2 = _0x3fc15b[_0x56bd08(0xf3)]["result"][_0x56bd08(0xdb)][
      _0x56bd08(0xdc)
    ]((_0x592d20) => ({
      hash: _0x592d20[_0x56bd08(0xdd)][_0x56bd08(0xec)],
      authorUsername: _0x592d20[_0x56bd08(0xdd)][_0x56bd08(0xe3)]["username"],
    }));
  for (const [_0x480e12, _0x15a9c2] of _0x5580b2[_0x56bd08(0xea)]()) {
    const _0xf4f1fa = _0x15a9c2[_0x56bd08(0xec)][_0x56bd08(0xe4)](0x0, 0xa);
    await LikePostingan(_0x8ea31c, _0x15a9c2[_0x56bd08(0xec)], _0x480e12 + 0x1),
      await AutoRecash(
        _0x8ea31c,
        _0x15a9c2[_0x56bd08(0xec)],
        _0x480e12 + 0x1,
        _0x15a9c2[_0x56bd08(0xd6)],
        _0xf4f1fa
      );
  }
  console["log"](
    "Sukses\x20Like\x20dan\x20Recash\x2015\x20postingan\x20cek\x20https://warpcast.com/" +
      "\x20" +
      _0x4a9da9[_0x56bd08(0xd7)](_0x56bd08(0xf4) + "\x20" + _0x424aef + "✅")
  );
}
const LikePostingan = async (_0x32427a, _0x2aaf32, _0x456f8d) => {
    const _0x49b011 = _0x4e9d,
      _0x52f35c = { castHash: _0x2aaf32 };
    try {
      const _0x560642 = await _0x38c614["put"](
        BaseUrl + _0x49b011(0xd8),
        _0x52f35c,
        { headers: { Authorization: _0x32427a } }
      );
      console[_0x49b011(0xe6)]("[" + _0x456f8d + "]" + "sukses\x20like");
    } catch (_0x5d2a89) {
      console[_0x49b011(0xe6)](
        _0x5d2a89["response"][_0x49b011(0xf3)]["errors"]
      );
    }
  },
  AutoRecash = async (
    _0x2e58b2,
    _0x2ca93d,
    _0x54dfa4,
    _0x1f08ce,
    _0x7cc039
  ) => {
    const _0xbb44b2 = _0x4e9d,
      _0x3fc03f = {
        text: "",
        embeds: ["https://warpcast.com/" + _0x1f08ce + "/" + _0x7cc039],
      },
      _0xd708af = { castHash: _0x2ca93d };
    try {
      const _0x9edd26 = await _0x38c614[_0xbb44b2(0xee)](
          BaseUrl + _0xbb44b2(0xd9),
          _0x3fc03f,
          { headers: { Authorization: _0x2e58b2 } }
        ),
        _0x586ef3 = await _0x38c614[_0xbb44b2(0xee)](
          BaseUrl + _0xbb44b2(0xe9),
          _0xd708af,
          { headers: { Authorization: _0x2e58b2 } }
        );
      console[_0xbb44b2(0xe6)]("[" + _0x54dfa4 + "]" + _0xbb44b2(0xf2));
    } catch (_0x2fdbe9) {
      console[_0xbb44b2(0xe6)](
        _0x2fdbe9[_0xbb44b2(0xe2)][_0xbb44b2(0xf3)]["errors"]
      );
    }
  };
