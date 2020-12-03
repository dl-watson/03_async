const fs = require("fs").promises;
const { transformer } = require("./transformer");
const input_src = "./2_transformer/palindrome.txt";
const output_src = "./emordnilap.txt";
const munged = `.DAM M’I TIMMAD
.EVIL I SA DEED A SI LIVE
”GOD A M’I .REVILED I ,RIS“
:EM YB EDO NA SUNIM ELTTOB ENO TON EMAN
.EMAN A TI NGISSA D’I .)PIS( SALA SI TI SSOL A
!TEW HO .STOPS TOH ELPMA NI TIS ,HO
.TI M’I .NI TI TEL LIAM NO
.TA DEVIL I LEVEL MADDOG A
,HSA YBUR NI NGIS A SA DEIFIED ,GULP I NMYH A
.LOOF A M’I ?REDRUM
.TI NI ERA SEMAN YM …ENO ,HTOB
.EMAN A SI NIS ?EVIL I NAC ,LAMINA TRAP
.NOITISOP ENO NI TI WAS STUC KRATS ,PEED
!ON HO .PEELS EW
?HE …REDIPS A ,WE
.BBE STI LLIF I FI LLITS EB
.BEW A SPID EREHWESLE .EPOH NO DEEP STAR
.KCUTS SAW I TI NO .NEPO SI TI .ON
?PART A NI ?MALC A NI LIVE SI
.NIS A ,NAM EB OT ,HO .NEM YNAM ESARE I
.NIT MUR DERIM A FO OLAH YM NI
,PLUG DEIFIED A SA ,SI GNINRUB YAS ,HA
.”GOD DAM“ LEVEL I .LIVED A TON MA I
.LLET I .TI NI M’I .TOH SI TI ,NAM
?PLEH OT SPOTS OHW .ETAL OS SI TI ,SALA
.SSIP I .DAS SI GNITANAME NAM ENO TON EB OT
.TLEM I ,NUS A NO DEB YM ,ESIR I ?DELIVER I MA ,DOG
.EVIL I SA DEED A SI LIVE
.DAM M’I TIMMAD`;

describe("transformer", () => {
  it("reads a file, removes all capitals with lowercase, makes all letters capital, then reverses the string", async () => {
    const string = await transformer(input_src);
    const contents = await fs.readFile(output_src, "utf-8");
    expect(contents).toEqual(string);
  });
});
