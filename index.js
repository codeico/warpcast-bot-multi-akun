const _0x243b37 = _0x4df3;
(function (_0x3e22ba, _0x58092f) {
  const _0x353c60 = _0x4df3,
    _0x2896b9 = _0x3e22ba();
  while (!![]) {
    try {
      const _0x1c0df9 =
        -parseInt(_0x353c60(0x185)) / 0x1 +
        -parseInt(_0x353c60(0x1a1)) / 0x2 +
        -parseInt(_0x353c60(0x17c)) / 0x3 +
        -parseInt(_0x353c60(0x198)) / 0x4 +
        parseInt(_0x353c60(0x1a2)) / 0x5 +
        (parseInt(_0x353c60(0x17b)) / 0x6) *
          (parseInt(_0x353c60(0x1a7)) / 0x7) +
        (parseInt(_0x353c60(0x183)) / 0x8) * (parseInt(_0x353c60(0x19e)) / 0x9);
      if (_0x1c0df9 === _0x58092f) break;
      else _0x2896b9["push"](_0x2896b9["shift"]());
    } catch (_0x12e8fc) {
      _0x2896b9["push"](_0x2896b9["shift"]());
    }
  }
})(_0x74f4, 0x4504c);
function _0x74f4() {
  const _0x21719 = [
    "get",
    "1182geWRVy",
    "884307rJzsRZ",
    "state",
    "redBright",
    "entries",
    "Jumlah\x20tidak\x20boleh\x20lebih\x20dari\x20100.",
    "Memfollow\x20",
    "greenBright",
    "3408kNfKYj",
    "length",
    "352578bSAKIX",
    "Sukses...\x20",
    "part2",
    "Followers",
    "parse",
    "part1",
    "5.\x20Keluar\x20Menu",
    "2.\x20Auto\x20Like\x20Home\x20And\x20Auto\x20Recast\x20Home",
    "Anda\x20memilih\x20Auto\x20Like",
    "green",
    "Token\x20salah\x20/\x20tidak\x20ada\x20jaringan",
    "Github\x20:\x20https://github.com/mhrdwan",
    "Akun\x20keberapa\x20yang\x20mau\x20di\x20cek?",
    "followerCount",
    "yellow",
    "question",
    "red",
    "readFileSync",
    "3.\x20Claim\x20Airdrop",
    "1740644Oomues",
    "https://warpcast.com/cyrusofeden/0xd0cfc930\x20:\x20",
    "Locked...",
    "blueBright",
    "result",
    "user",
    "25731eeGRPt",
    "Input\x20tidak\x20valid.\x20Harus\x20berupa\x20angka\x20positif\x20dan\x20tidak\x20boleh\x200.",
    "1.\x20Auto\x20Follow\x20Random",
    "808090QakZYr",
    "1640590qZwsod",
    "username",
    "Username",
    "\x20:\x20",
    "nama",
    "7931fgTHVW",
    "Pilih\x20Menu:",
    "==============================================",
    "Following",
    "onboarding-state",
    "log",
    "Akun\x20tidak\x20ada",
    "yellowBright",
    "match",
    "./bearer.json",
    "MAX\x20100",
  ];
  _0x74f4 = function () {
    return _0x21719;
  };
  return _0x74f4();
}
import _0x1c3617 from "axios";
import { BaseUrl } from "./userPK.js";
import _0x46e8ec from "chalk";
import _0x3ed35c from "readline-sync";
import { SuggestedFollows } from "./Func/SuggestedFollows.js";
import { Follow, Follows } from "./Func/FunctionFollow.js";
import { CekAirdrop } from "./Func/FunctionCekAirdrop.js";
import { cekValidasi } from "./Func/github.js";
import _0x2e08aa from "fs";
import { json } from "express";
function _0x4df3(_0xd89fa6, _0x54a463) {
  const _0x74f4bf = _0x74f4();
  return (
    (_0x4df3 = function (_0x4df303, _0x276af7) {
      _0x4df303 = _0x4df303 - 0x174;
      let _0x13e295 = _0x74f4bf[_0x4df303];
      return _0x13e295;
    }),
    _0x4df3(_0xd89fa6, _0x54a463)
  );
}
import { FetchMessage } from "./Func/FunctionFollowMessage.js";
import { HOME } from "./Func/FunctionHome.js";
const token = _0x2e08aa[_0x243b37(0x196)](_0x243b37(0x178), "utf-8"),
  tokenNya = JSON[_0x243b37(0x189)](token);
let fid = 0x0;
const Akunku = [0x3f5a5, 0x49f27],
  FetchProfile = async () => {
    const _0x4a96e1 = _0x243b37;
    console[_0x4a96e1(0x174)](
      _0x46e8ec[_0x4a96e1(0x193)](
        "Akun\x20yang\x20terhubung\x20ada" + "\x20" + tokenNya[_0x4a96e1(0x184)]
      )
    );
    try {
      for (const [_0x2f98f0, _0x27f85f] of tokenNya["entries"]()) {
        for (const [_0x18ec8e, _0x36285c] of Akunku[_0x4a96e1(0x17f)]()) {
          const _0x18bd1d = JSON[_0x4a96e1(0x189)](_0x36285c);
          await Follows(_0x18bd1d, _0x27f85f);
        }
        const _0x2c8051 = await _0x1c3617[_0x4a96e1(0x17a)](
            BaseUrl + _0x4a96e1(0x1ab),
            { headers: { Authorization: _0x27f85f } }
          ),
          _0x553a7a = _0x2c8051["data"][_0x4a96e1(0x19c)][_0x4a96e1(0x17d)];
        (fid = _0x553a7a[_0x4a96e1(0x19d)]["fid"]),
          console[_0x4a96e1(0x174)](_0x46e8ec["yellow"](_0x4a96e1(0x1a9))),
          console[_0x4a96e1(0x174)](
            _0x46e8ec[_0x4a96e1(0x18e)](
              "Nama" +
                "\x20:\x20" +
                _0x553a7a[_0x4a96e1(0x19d)]["displayName"] +
                "\x0a" +
                _0x4a96e1(0x1a4) +
                "\x20:\x20" +
                _0x553a7a["user"][_0x4a96e1(0x1a3)] +
                "\x0a" +
                _0x4a96e1(0x188) +
                _0x4a96e1(0x1a5) +
                _0x553a7a[_0x4a96e1(0x19d)][_0x4a96e1(0x192)] +
                "\x0a" +
                _0x4a96e1(0x1aa) +
                _0x4a96e1(0x1a5) +
                _0x553a7a["user"]["followingCount"]
            )
          );
      }
    } catch (_0x272408) {
      console["log"](_0x46e8ec[_0x4a96e1(0x17e)](_0x4a96e1(0x18f)));
    }
  };
function extractParts(_0x26ff11) {
  const _0x2a1891 = _0x243b37,
    _0x55687d = /\/([^/]+)\/([^/]+)$/,
    _0x24ce53 = _0x26ff11[_0x2a1891(0x177)](_0x55687d);
  if (_0x24ce53) {
    const _0x4b9b6e = _0x24ce53[0x1],
      _0x9c6eef = _0x24ce53[0x2];
    return { part1: _0x4b9b6e, part2: _0x9c6eef };
  } else
    return (
      console[_0x2a1891(0x174)](
        _0x46e8ec[_0x2a1891(0x195)]("URL\x20tidak\x20sesuai.")
      ),
      null
    );
}
const main = async () => {
  const _0x405866 = _0x243b37;
  console[_0x405866(0x174)](_0x46e8ec[_0x405866(0x193)](_0x405866(0x1a9))),
    console[_0x405866(0x174)](
      _0x46e8ec[_0x405866(0x19b)](
        "Bot\x20Multi\x20Akun\x20Warpcast\x20by\x20RidwanTech"
      )
    ),
    console[_0x405866(0x174)](_0x46e8ec[_0x405866(0x19b)](_0x405866(0x190))),
    console["log"](_0x46e8ec[_0x405866(0x193)](_0x405866(0x1a9))),
    await FetchProfile(),
    console["log"](
      _0x46e8ec[_0x405866(0x193)](
        "=============================================="
      )
    ),
    console[_0x405866(0x174)](_0x405866(0x1a8)),
    console[_0x405866(0x174)](_0x405866(0x1a0)),
    console[_0x405866(0x174)](_0x405866(0x18c)),
    console[_0x405866(0x174)](
      _0x405866(0x197) + "\x20" + _0x46e8ec["redBright"](_0x405866(0x19a))
    ),
    console[_0x405866(0x174)](
      "4.\x20Follow\x20orang\x20di\x20grup\x20message\x20dan\x20tag\x20setelah\x20di\x20follow"
    ),
    console[_0x405866(0x174)](_0x405866(0x18b)),
    console[_0x405866(0x174)](_0x46e8ec["yellow"](_0x405866(0x1a9)));
  const _0x2e9be0 = _0x3ed35c["question"](
    _0x46e8ec[_0x405866(0x17e)]("Masukkan\x20pilihan\x20\x20:\x20")
  );
  if (_0x2e9be0 === "1") {
    const _0x1f689b = _0x3ed35c["question"](
        _0x46e8ec[_0x405866(0x182)](
          "Berapa\x20orang\x20yang\x20mau\x20di\x20follow?\x20" +
            _0x46e8ec[_0x405866(0x17e)](_0x405866(0x179)) +
            _0x405866(0x1a5)
        )
      ),
      _0x1ea96a = parseInt(_0x1f689b, 0xa);
    if (!isNaN(_0x1ea96a) && _0x1ea96a > 0x0 && _0x1ea96a <= 0x64) {
      const _0x20f108 = await SuggestedFollows(_0x1ea96a);
      for (const [_0x1f9def, _0x38c695] of _0x20f108[_0x405866(0x17f)]()) {
        for (const [_0x57ad8a, _0x4d4428] of tokenNya["entries"]()) {
          const _0x343f67 = _0x57ad8a + 0x1;
          try {
            await Follow(_0x38c695["fid"], _0x4d4428, _0x57ad8a),
              console[_0x405866(0x174)](
                _0x46e8ec[_0x405866(0x17e)](_0x405866(0x1a9))
              ),
              console[_0x405866(0x174)](
                _0x46e8ec[_0x405866(0x182)](
                  _0x1f9def +
                    0x1 +
                    "\x20" +
                    _0x405866(0x181) +
                    _0x38c695[_0x405866(0x1a3)]
                ) +
                  "(" +
                  _0x46e8ec[_0x405866(0x17e)](_0x38c695[_0x405866(0x1a6)]) +
                  ")"
              ),
              console["log"](_0x46e8ec[_0x405866(0x17e)](_0x405866(0x1a9)));
          } catch (_0x97e105) {
            console[_0x405866(0x174)](_0x97e105);
          }
        }
        console[_0x405866(0x174)](
          _0x46e8ec[_0x405866(0x182)](_0x405866(0x186))
        );
      }
    } else
      _0x1ea96a > 0x64
        ? console["log"](_0x46e8ec["redBright"](_0x405866(0x180)))
        : console["log"](_0x46e8ec[_0x405866(0x17e)](_0x405866(0x19f)));
  } else {
    if (_0x2e9be0 === "2") {
      console[_0x405866(0x174)](_0x405866(0x18d));
      for (const [_0x58f9a8, _0x14b955] of tokenNya[_0x405866(0x17f)]()) {
        await HOME(_0x14b955, _0x58f9a8 + 0x1);
      }
    } else {
      if (_0x2e9be0 === "3") {
        const _0x35cb45 = _0x3ed35c["question"](
            _0x46e8ec[_0x405866(0x182)](
              "Masukkan\x20link\x20urlnya,\x20contoh" +
                "\x20" +
                _0x46e8ec[_0x405866(0x176)](_0x405866(0x199))
            )
          ),
          _0xa447a3 = extractParts(_0x35cb45);
        _0xa447a3 &&
          (await CekAirdrop(
            _0xa447a3[_0x405866(0x18a)],
            _0xa447a3[_0x405866(0x187)]
          ));
      } else {
        if (_0x2e9be0 === "4") {
          const _0x177ec2 = _0x3ed35c[_0x405866(0x194)](
              _0x46e8ec[_0x405866(0x182)](_0x405866(0x191))
            ),
            _0x495d37 = parseInt(_0x177ec2) - 0x1;
          tokenNya[_0x495d37]
            ? await FetchMessage(tokenNya[_0x495d37])
            : console[_0x405866(0x174)](
                _0x46e8ec[_0x405866(0x17e)](_0x405866(0x175))
              );
        }
      }
    }
  }
};
main();
