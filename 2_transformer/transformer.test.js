const fs = require("fs").promises;
const { transformer } = require("./transformer");
const input_src = "./2_transformer/palindrome.txt";
const output_src = "./2_transformer/emordnilap.txt";
const string = `Dammit I’m mad.
Evil is a deed as I live.
God, am I reviled? I rise, my bed on a sun, I melt.
To be not one man emanating is sad. I piss.
Alas, it is so late. Who stops to help?
Man, it is hot. I’m in it. I tell.
I am not a devil. I level “Mad Dog”.
Ah, say burning is, as a deified gulp,
In my halo of a mired rum tin.
I erase many men. Oh, to be man, a sin.
Is evil in a clam? In a trap?
No. It is open. On it I was stuck.
Rats peed on hope. Elsewhere dips a web.
Be still if I fill its ebb.
Ew, a spider… eh?
We sleep. Oh no!
Deep, stark cuts saw it in one position.
Part animal, can I live? Sin is a name.
Both, one… my names are in it.
Murder? I’m a fool.
A hymn I plug, deified as a sign in ruby ash,
A Goddam level I lived at.
On mail let it in. I’m it.
Oh, sit in ample hot spots. Oh wet!
A loss it is alas (sip). I’d assign it a name.
Name not one bottle minus an ode by me:
“Sir, I deliver. I’m a dog”
Evil is a deed as I live.
Dammit I’m mad.`;
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
    await transformer(input_src);
    const contents = await fs.readFile(output_src, "utf-8");
    expect(contents).toEqual(munged);
  });
});
