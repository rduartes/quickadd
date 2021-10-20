export const LATEX_CURSOR_MOVE_HERE = "\u261A";

// Modified from https://github.com/echaos/BetterLatexForObsidian (MIT License).
const commands = [
    "\\!",
    "\\,",
    "\\:",
    "\\>",
    "\\;",
    "\\#",
    "\\$",
    "\\%",
    "\\&",
    "\\",
    "\_",
    "\{ \}",
    "\|",
    `\^{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    `\[${LATEX_CURSOR_MOVE_HERE}]${LATEX_CURSOR_MOVE_HERE}`,
    "\\above",
    "\\abovewithdelims",
    "\\acute",
    "\\aleph",
    "\\alpha",
    "\\amalg",
    "\\And",
    "\\angle",
    "\\approx",
    "\\approxeq",
    "\\arccos",
    "\\arcsin",
    "\\arctan",
    "\\arg",
    "\\array",
    "\\arrowvert",
    "\\Arrowvert",
    "\\ast",
    "\\asymp",
    "\\atop",
    "\\atopwithdelims",
    "\\backepsilon",
    "\\backprime",
    "\\backsim",
    "\\backsimeq",
    "\\backslash",
    "\\bar",
    "\\barwedge",
    "\\Bbb",
    "\\Bbbk",
    "\\because",
    "\\begin",
    "\\beta",
    "\\beth",
    "\\between",
    "\\bf",
    "\\Bigg",
    "\\bigg",
    "\\Big",
    "\\big",
    "\\Biggl", "\\Biggm", "\\Biggr",
    "\\biggl", "\\biggm", "\\biggr",
    "\\Bigl", "\\Bigm", "\\Bigl",
    "\\bigl", "\\bigm", "\\bigr",
    "\\bigcap",
    "\\bigcirc",
    "\\bigcup",
    "\\bigodot",
    "\\bigoplus",
    "\\bigotimes",
    "\\bigsqcup",
    "\\bigstar",
    "\\bigtriangledown",
    "\\bigtriangleup",
    "\\biguplus",
    "\\bigvee",
    "\\bigwedge",
    "\\binom",
    "\\blacklozenge",
    "\\blacksquare",
    "\\blacktriangle",
    "\\blacktriangledown",
    "\\blacktriangleleft",
    "\\blacktriangleright",
    "\\bmod",
    "\\boldsymbol",
    "\\bot",
    "\\bowtie",
    "\\Box",
    "\\boxdot",
    "\\boxed",
    "\\boxminus",
    "\\boxplus",
    "\\boxtimes",
    "\\brace",
    "\\bracevert",
    "\\brack",
    "\\breve",
    "\\bullet",
    "\\Bumpeq",
    "\\bumpeq",
    "\\cal",
    "\\cancel",
    "\\Cap",
    "\\cap",
    "\\cases",
    "\\cdot",
    "\\cdotp",
    "\\cdots",
    "\\centerdot",
    `\\cfrac{${LATEX_CURSOR_MOVE_HERE}}{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    "\\check",
    "\\checkmark",
    "\\chi",
    "\\choose",
    "\\circ",
    "\\circeq",
    "\\circlearrowleft",
    "\\circlearrowright",
    "\\circledast",
    "\\circledcirc",
    "\\circleddash",
    "\\circledR",
    "\\circledS",
    "\\class",
    "\\clubsuit",
    "\\colon",
    "\\color",
    "\\complement",
    "\\cong",
    "\\coprod",
    "\\cos",
    "\\cosh",
    "\\cot",
    "\\coth",
    "\\cr",
    "\\csc",
    "\\cssId",
    "\\Cup",
    "\\cup",
    "\\curlyeqprec",
    "\\curlyeqsucc",
    "\\curlyvee",
    "\\curlywedge",
    "\\curvearrowleft",
    "\\curvearrowright",
    "\\dagger",
    "\\ddagger",
    "\\daleth",
    "\\dashleftarrow",
    "\\dashrightarrow",
    "\\dashv",
    "\\dbinom",
    "\\dot",
    "\\ddot",
    "\\dddot",
    "\\ddddot",
    "\\ddots",
    "\\DeclareMathOperator",
    "\\def",
    "\\deg",
    "\\Delta",
    "\\delta",
    "\\det",
    `\\dfrac{${LATEX_CURSOR_MOVE_HERE}}{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    "\\diagdown",
    "\\diagup",
    "\\Diamond",
    "\\diamond",
    "\\diamondsuit",
    "\\digamma",
    "\\dim",
    "\\displaylines",
    "\\displaystyle",
    "\\div",
    "\\divideontimes",
    "\\Doteq",
    "\\doteq",
    "\\dotplus",
    "\\dots",
    "\\dotsb",
    "\\dotsc",
    "\\dotsi",
    "\\dotsm",
    "\\dotso",
    "\\doublebarwedge",
    "\\doublecap",
    "\\doublecup",
    "\\downarrow",
    "\\Downarrow",
    "\\downdownarrows",
    "\\downharpoonleft",
    "\\downharpoonright",
    "\\ell",
    "\\emptyset",
    "\\end",
    "\\enspace",
    "\\epsilon",
    "\\eqalign",
    "\\eqalignno",
    "\\eqcirc",
    "\\eqsim",
    "\\eqslantgtr",
    "\\eqslantless",
    "\\equiv",
    "\\eta",
    "\\eth",
    "\\exists",
    "\\exp",
    "\\fallingdotseq",
    "\\fbox",
    "\\Finv",
    "\\flat",
    "\\forall",
    `\\frac{${LATEX_CURSOR_MOVE_HERE}}{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    "\\frak",
    "\\frown",
    "\\Game",
    "\\Gamma",
    "\\gamma",
    "\\gcd",
    "\\ge",
    "\\geq",
    "\\geqq",
    "\\geqslant",
    "\\genfrac",
    "\\gets",
    "\\gg",
    "\\ggg",
    "\\gggtr",
    "\\gimel",
    "\\gtrapprox",
    "\\gnapprox",
    "\\gneq",
    "\\gneqq",
    "\\gvertneqq",
    "\\gtrsim",
    "\\gnsim",
    "\\grave",
    "\\gt",
    "\\gtrdot",
    "\\gtreqless",
    "\\gtreqqless",
    "\\gtrless",
    "\\hat",
    "\\hbar",
    "\\hbox",
    "\\hdashline",
    "\\hline",
    "\\heartsuit",
    "\\hfil",
    "\\hfill",
    "\\hom",
    "\\hookleftarrow",
    "\\hookrightarrow",
    "\\hphantom",
    "\\href",
    "\\hskip",
    "\\hslash",
    "\\hspace",
    "\\Huge",
    "\\huge",
    "\\iddots",
    "\\idotsint",
    "\\iff",
    "\\iiiint",
    "\\iiint",
    "\\iint",
    "\\int",
    "\\intop",
    "\\Im",
    "\\imath",
    "\\impliedby",
    "\\implies",
    "\\in",
    "\\inf",
    "\\infty",
    "\\injlim",
    "\\intercal",
    "\\iota",
    "\\it",
    "\\jmath",
    "\\Join",
    "\\kappa",
    "\\ker",
    "\\kern",
    "\\Lambda",
    "\\lambda",
    "\\land",
    "\\langle",
    "\\LARGE",
    "\\Large",
    "\\large",
    "\\LaTeX",
    "\\lbrace",
    "\\lbrack",
    "\\lceil",
    "\\ldotp",
    "\\ldots",
    "\\le",
    "\\leq",
    "\\leqq",
    "\\leqslant",
    "\\leadsto",
    "\\left",
    "\\leftarrow",
    "\\Leftarrow",
    "\\leftarrowtail",
    "\\leftharpoondown",
    "\\leftharpoonup",
    "\\leftleftarrows",
    "\\leftrightarrow",
    "\\Leftrightarrow",
    "\\leftrightarrows",
    "\\leftrightharpoons",
    "\\leftrightsquigarrow",
    "\\leftroot",
    "\\leftthreetimes",
    "\\leqalignno",
    "\\lessapprox",
    "\\lessdot",
    "\\lesseqgtr",
    "\\lesseqqgtr",
    "\\lessgtr",
    "\\lesssim",
    "\\lfloor",
    "\\lg",
    "\\lgroup",
    "\\lhd",
    "\\lim",
    "\\liminf",
    "\\limits",
    "\\limsup",
    "\\ll",
    "\\llap",
    "\\llcorner",
    "\\lrcorner",
    "\\Lleftarrow",
    "\\lll",
    "\\llless",
    "\\lmoustache",
    "\\ln",
    "\\lnapprox",
    "\\lneq",
    "\\lneqq",
    "\\lnot",
    "\\lnsim",
    "\\log",
    "\\longleftarrow",
    "\\Longleftarrow",
    "\\longrightarrow",
    "\\Longrightarrow",
    "\\longleftrightarrow",
    "\\Longleftrightarrow",
    "\\longmapsto",
    "\\looparrowleft",
    "\\looparrowright",
    "\\lor",
    "\\lower",
    "\\lozenge",
    "\\Lsh",
    "\\lt",
    "\\ltimes",
    "\\lvert",
    "\\lVert",
    "\\lvertneqq",
    "\\maltese",
    "\\mapsto",
    "\\mathbb",
    "\\mathbf",
    "\\mathbin",
    "\\mathcal",
    "\\mathchoice",
    "\\mathclose",
    "\\mathfrak",
    "\\mathinner",
    "\\mathit",
    "\\mathop",
    "\\mathopen",
    "\\mathord",
    "\\mathpunct",
    "\\mathrel",
    "\\mathring",
    "\\mathrm",
    "\\mathscr",
    "\\mathsf",
    "\\mathstrut",
    "\\mathtt",
    "\\matrix",
    "\\max",
    "\\mbox",
    "\\measuredangle",
    "\\mho",
    "\\mid",
    "\\min",
    "\\mit",
    "\\mod",
    "\\models",
    "\\moveleft",
    "\\moveright",
    "\\mp",
    "\\mskip",
    "\\mspace",
    "\\mu",
    "\\multimap",
    "\\nabla",
    "\\natural",
    "\\ncong",
    "\\ne",
    "\\nearrow",
    "\\neg",
    "\\negthinspace",
    "\\negmedspace",
    "\\negthickspace",
    "\\neq",
    "\\newcommand",
    "\\newenvironment",
    "\\newline",
    "\\nexists",
    "\\ngeq",
    "\\ngeqq",
    "\\ngeqslant",
    "\\ngtr",
    "\\ni",
    "\\nleftarrow",
    "\\nLeftarrow",
    "\\nleftrightarrow",
    "\\nLeftrightarrow",
    "\\nleq",
    "\\nleqq",
    "\\nleqslant",
    "\\nless",
    "\\nmid",
    "\\nobreakspace",
    "\\nolimits",
    "\\normalsize",
    "\\not",
    "\\notag",
    "\\notin",
    "\\nparallel",
    "\\nprec",
    "\\npreceq",
    "\\nrightarrow",
    "\\nRightarrow",
    "\\nshortmid",
    "\\nshortparallel",
    "\\nsim",
    "\\nsubseteq",
    "\\nsubseteqq",
    "\\nsucc",
    "\\nsucceq",
    "\\nsupseteq",
    "\\nsupseteqq",
    "\\ntriangleleft",
    "\\ntrianglelefteq",
    "\\ntriangleright",
    "\\ntrianglerighteq",
    "\\nu",
    "\\nVDash",
    "\\nVdash",
    "\\nvDash",
    "\\nvdash",
    "\\nwarrow",
    "\\odot",
    "\\ominus",
    "\\oplus",
    "\\oslash",
    "\\otimes",
    "\\oint",
    "\\oldstyle",
    "\\omega",
    "\\Omega",
    "\\omicron",
    "\\operatorname",
    "\\over",
    "\\overbrace",
    "\\overleftarrow",
    "\\overrightarrow",
    "\\overleftrightarrow",
    "\\overline",
    "\\overparen",
    "\\overset",
    "\\overwithdelims",
    "\\owns",
    "\\parallel",
    "\\partial",
    "\\perp",
    "\\phantom",
    "\\phi",
    "\\Phi",
    "\\pi",
    "\\Pi",
    "\\pitchfork",
    "\\pm",
    "\\pmatrix",
    "\\pmb",
    "\\pmod",
    "\\pod",
    "\\Pr",
    "\\prec",
    "\\precapprox",
    "\\precnapprox",
    "\\preccurlyeq",
    "\\preceq",
    "\\precneqq",
    "\\precsim",
    "\\precnsim",
    "\\prime",
    "\\prod",
    "\\projlim",
    "\\propto",
    "\\psi",
    "\\Psi",
    "\\quad",
    "\\qquad",
    "\\raise",
    "\\rangle",
    "\\rbrace",
    "\\rbrack",
    "\\rceil",
    "\\Re",
    "\\renewcommand",
    "\\require (non-standard)",
    "\\restriction",
    "\\rfloor",
    "\\rgroup",
    "\\rhd",
    "\\rho",
    "\\right",
    "\\rightarrow",
    "\\Rightarrow",
    "\\rightarrowtail",
    "\\rightharpoondown",
    "\\rightharpoonup",
    "\\rightleftarrows",
    "\\rightleftharpoons",
    "\\rightrightarrows",
    "\\rightsquigarrow",
    "\\rightthreetimes",
    "\\risingdotseq",
    "\\rlap",
    "\\rm",
    "\\rmoustache",
    "\\Rrightarrow",
    "\\Rsh",
    "\\rtimes",
    "\\Rule (non-standard)",
    "\\rvert",
    "\\rVert",
    "\\S",
    "\\scr",
    "\\scriptscriptstyle",
    "\\scriptsize",
    "\\scriptstyle",
    "\\searrow",
    "\\sec",
    "\\setminus",
    "\\sf",
    "\\sharp",
    "\\shortmid",
    "\\shortparallel",
    "\\shoveleft",
    "\\shoveright",
    "\\sideset",
    "\\sigma",
    "\\Sigma",
    "\\sim",
    "\\simeq",
    "\\sin",
    "\\sinh",
    "\\skew",
    "\\small",
    "\\smallfrown",
    "\\smallint",
    "\\smallsetminus",
    "\\smallsmile",
    "\\smash",
    "\\smile",
    "\\space",
    "\\Space (non-standard)",
    "\\spadesuit",
    "\\sphericalangle",
    "\\sqcap",
    "\\sqcup",
    "\\sqrt",
    "\\sqsubset",
    "\\sqsupset",
    "\\sqsubseteq",
    "\\sqsupseteq",
    "\\square",
    "\\stackrel",
    "\\star",
    "\\strut",
    "\\style",
    "\\subset",
    "\\Subset",
    "\\subseteq",
    "\\subsetneq",
    "\\subseteqq",
    "\\subsetneqq",
    "\\substack",
    "\\succ",
    "\\succapprox",
    "\\succnapprox",
    "\\succcurlyeq",
    "\\succeq",
    "\\succneqq",
    "\\succsim",
    "\\succnsim",
    "\\sum",
    "\\sup",
    "\\supset",
    "\\Supset",
    "\\supseteq",
    "\\supsetneq",
    "\\supseteqq",
    "\\supsetneqq",
    "\\surd",
    "\\swarrow",
    "\\tag",
    "\\tan",
    "\\tanh",
    "\\tau",
    "\\tbinom",
    "\\TeX",
    `\\text{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    `\\textbf{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    `\\textit{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    `\\textrm{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    `\\textsf{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    `\\texttt{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    "\\textstyle",
    `\\tfrac{${LATEX_CURSOR_MOVE_HERE}}{${LATEX_CURSOR_MOVE_HERE}}${LATEX_CURSOR_MOVE_HERE}`,
    "\\therefore",
    "\\theta",
    "\\Theta",
    "\\thickapprox",
    "\\thicksim",
    "\\thinspace",
    "\\tilde",
    "\\times",
    "\\tiny",
    "\\Tiny",
    "\\to",
    "\\top",
    "\\triangle",
    "\\triangledown",
    "\\triangleleft",
    "\\triangleright",
    "\\trianglelefteq",
    "\\trianglerighteq",
    "\\triangleq",
    "\\tt",
    "\\twoheadleftarrow",
    "\\twoheadrightarrow",
    "\\ulcorner",
    "\\urcorner",
    "\\underbrace",
    "\\underleftarrow",
    "\\underrightarrow",
    "\\underleftrightarrow",
    "\\underline",
    "\\underparen",
    "\\underset",
    "\\unicode",
    "\\unlhd",
    "\\unrhd",
    "\\uparrow",
    "\\Uparrow",
    "\\updownarrow",
    "\\Updownarrow",
    "\\upharpoonleft",
    "\\upharpoonright",
    "\\uplus",
    "\\uproot",
    "\\upsilon",
    "\\Upsilon",
    "\\upuparrows",
    "\\varDelta",
    "\\varepsilon",
    "\\varGamma",
    "\\varinjlim",
    "\\varkappa",
    "\\varLambda",
    "\\varlimsup",
    "\\varliminf",
    "\\varnothing",
    "\\varOmega",
    "\\varphi",
    "\\varPhi",
    "\\varpi",
    "\\varPi",
    "\\varprojlim",
    "\\varpropto",
    "\\varPsi",
    "\\varrho",
    "\\varsigma",
    "\\varSigma",
    "\\varsubsetneq",
    "\\varsubsetneqq",
    "\\varsupsetneq",
    "\\varsupsetneqq",
    "\\vartheta",
    "\\varTheta",
    "\\vartriangle",
    "\\vartriangleleft",
    "\\vartriangleright",
    "\\varUpsilon",
    "\\varXi",
    "\\vcenter",
    "\\vdash",
    "\\Vdash",
    "\\vDash",
    "\\vdots",
    "\\vec",
    "\\vee",
    "\\veebar",
    "\\verb",
    "\\vert",
    "\\Vert",
    "\\vphantom",
    "\\Vvdash",
    "\\wedge",
    "\\widehat",
    "\\widetilde",
    "\\wp",
    "\\wr",
    "\\Xi",
    "\\xi",
    "\\xleftarrow",
    "\\xrightarrow",
    "\\yen",
    "\\zeta",
    "\\{%C\\}%C",
    "\\langle %C \\rangle%C"
]

const environments = [
    "align",
    "align*",
    "alignat",
    "alignat*",
    "array",
    "Bmatrix",
    "bmatrix",
    "cases",
    "eqnarray",
    "eqnarray*",
    "equation",
    "equation*",
    "gather",
    "gather*",
    "matrix",
    "pmatrix",
    "smallmatrix",
    "subarray",
    "Vmatrix",
    "vmatrix",
]

function beginEndGen(symbol: string) {
    return `\\begin{${symbol}}\n${LATEX_CURSOR_MOVE_HERE}\n\\end{${symbol}}${LATEX_CURSOR_MOVE_HERE}`;
}

export const LaTeXSymbols = [...commands, ...environments.map(beginEndGen)];
