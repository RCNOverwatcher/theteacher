import React from "react";

function Codes_and_character_sets() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                Codes and character sets
                              </h1>
                              <p>
                                <strong>Character sets</strong>
                                <br />
                                When you press a key on your computer's
                                keyboard, a code is generated. Every lower case
                                letter, every capital letter, every number,
                                every 'special' character like the pound sign
                                and @, for example, the space bar, the ENTER key
                                and so on, has its own binary code.
                              </p>
                              <p>
                                When you write an email, for example, you press
                                keys on the keyboard. Each key is converted into
                                a binary code. Together, they are saved to form
                                a message. You might then send this message to
                                your friend. When your friend receives the
                                message, they have to be using the same codes as
                                you to 'decode' the binary codes back into
                                letters. Imagine what would happen if the codes
                                for ' H e l l o ' were different - according to
                                your friend's codes, the message might be ' r %
                                P + '! Clearly, this is not good. The reason
                                that computers can talk meaningfully to each
                                other is that they all (more or less) use the
                                same set of codes. There are three sets that you
                                should know about. In addition, you should look
                                up ANSI for yourself and find out how it differs
                                from these three.
                              </p>
                              <ol>
                                <li style="list-style-type: none">
                                  <ol>
                                    <li>ASCII</li>
                                    <li>EBCDIC</li>
                                    <li>Unicode</li>
                                  </ol>
                                </li>
                              </ol>
                              <p>
                                <strong style="line-height: 1.5">
                                  Standard ASCII and Extended ASCII
                                </strong>
                                <br />
                                The most important set of codes to represent all
                                of the possible key presses on a computer
                                keyboard is the American Standard Code for
                                Information Interchange, or ASCII (pronounced
                                'ass-key'). It is the set of codes used by
                                Personal Computers.
                              </p>
                              <p>
                                In Standard ASCII, each character on the
                                keyboard is represented by a 7 bit code. There
                                are 96 displayable characters and 32 codes that
                                are used for controlling e.g. printing. In
                                Standard ASCII, for example, the letter 'A' is
                                represented by the 7 bit code 1000001 (65 in
                                decimal), the letter 'a' is 1100001 (97 in
                                decimal), the '?' is represented by 0111111 (63
                                in decimal), a space is 32 in decimal and Null
                                is decimal code 0. All of the different possible
                                codes together make up what is known as the
                                ASCII character set. If you are using 7 bits to
                                represent a code, you have a total of 27, or 128
                                possible combinations. That means you can
                                represent 128 different characters!
                              </p>
                              <table
                                style="border-collapse: collapse; border: none"
                                border="1"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border: 1pt solid windowtext;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>0 NUL</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: solid solid solid none;
                                    border-top-color: windowtext;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-top-width: 1pt;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>16 DLE</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: solid solid solid none;
                                    border-top-color: windowtext;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-top-width: 1pt;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>32 SP</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: solid solid solid none;
                                    border-top-color: windowtext;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-top-width: 1pt;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>48 0</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: solid solid solid none;
                                    border-top-color: windowtext;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-top-width: 1pt;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>64 </strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: solid solid solid none;
                                    border-top-color: windowtext;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-top-width: 1pt;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>80 P</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: solid solid solid none;
                                    border-top-color: windowtext;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-top-width: 1pt;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>96 ‛</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: solid solid solid none;
                                    border-top-color: windowtext;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-top-width: 1pt;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>112 p</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>1 SOH</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>17 DC1</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>33 !</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>49 1</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>65 A</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>81 Q</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>97 a</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>113 q</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>2 STX</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>18 DC2</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>34 “</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>50 2</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>66 B</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>82 R</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>98 b</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>114 r</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>3 ETX</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>19 DC3</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>35 #</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>51 3</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>67 C</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>83 S</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>99 c</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>115 s</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>4 EOT</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>20 DC4</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>36 $</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>52 4</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>68 D</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>84 T</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>100 d</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>116 t</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>5 ENQ</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>21 NAK</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>37 %</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>53 5</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>69 E</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>85 U</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>101 e</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>117 u</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>6 ACK</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>22 SYN</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>38 &amp;</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>54 6</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>70 F</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>86 V</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>102 f</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>118 v</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>7 BEL</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>23 ETB</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>39 ‘</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>55 7</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>71 G</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>87 W</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>103 g</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>119 w</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>8 BS</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>24 CAN</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>40 (</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>56 8</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>72 H</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>88 X</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>104 h</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>120 x</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>9 HT</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>25 EM</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>41 )</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>57 9</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>73 I</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>89 Y</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>105 i</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>121 y</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>10 LF</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>26 SUB</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>42 *</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>58 :</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>74 J</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>90 Z</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>106 j</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>122 z</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>11 VT</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>27 ESC</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>43 +</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>59 ;</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>75 K</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>91 [</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>107 k</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>123 </strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>12 FF</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>28 FS</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>44 ,</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>60 &lt;</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>76 L</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>92 \</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>108 l</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>124 |</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>13 CR</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>29 GS</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>45 -</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>61 =</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>77 M</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>93 ]</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>109 m</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>125</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>14 SO</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>30 RS</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>46 .</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>62 &gt;</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>78 N</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>94 ^</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>110 n</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>126 ~</strong>
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid;
                                    border-right-color: windowtext;
                                    border-bottom-color: windowtext;
                                    border-left-color: windowtext;
                                    border-right-width: 1pt;
                                    border-bottom-width: 1pt;
                                    border-left-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>15 SI</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>31 US</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.1pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>47 /</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>63 ?</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>79 O</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>95 _</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>111 o</strong>
                                      </p>
                                    </td>
                                    <td
                                      style="
                                    width: 65.15pt;
                                    border-style: none solid solid none;
                                    border-bottom-color: windowtext;
                                    border-bottom-width: 1pt;
                                    border-right-color: windowtext;
                                    border-right-width: 1pt;
                                    padding: 0cm 5.4pt;
                                  "
                                      valign="top"
                                      width="87"
                                    >
                                      <p>
                                        <strong>127 DEL</strong>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    &nbsp;
                                  </span>
                                </strong>
                                The standard ASCII character set – decimal
                                values and the character or control code they
                                represent.
                              </p>
                              <p>
                                Standard ASCII uses 7 bits for each code.
                                Programmers and computer people like to work in
                                nice easy packets of 8 bits (called a byte).
                                That means that we have an extra, 8th bit to
                                play with! We can use this extra 8th bit in
                                Standard ASCII for some error checking, looking
                                for errors when bits are sent from one place to
                                another. When bits are being transmitted, there
                                is a real possibility that they get 'corrupted'.
                                In other words, the bits and therefore the codes
                                change and so the message changes, too! It is
                                necessary to check for errors when data is
                                transmitted. The error-checking that takes place
                                using the 8th bit is known as ‘parity checking’.
                                This is dealt with elsewhere in the book.
                              </p>
                              <p>
                                An alternative is to use all 8 bits for a code
                                instead of 7 bits so you would have a total of
                                28, or 256 different combinations in your
                                character set. In other words, you can represent
                                128 more characters than in 7 bit ASCII. You can
                                have a code for the letters that appear in other
                                languages but not in the English alphabet or for
                                graphics symbols, for example. All of the 8-bit
                                codes together are known as the Extended ASCII
                                character set. Most computers today use Extended
                                ASCII so extra characters can be represented.
                                There is another character set, however, that is
                                used in large commercial systems.
                              </p>
                              <p>
                                <strong>EBCDIC</strong>
                                <br />
                                The Extended Binary Coded Decimal Interchange
                                Code is a character set used by older
                                'mainframes'. A mainframe computer is simply a
                                computer that can be accessed from many
                                terminals. It is often the preferred type of
                                computer for businesses that process a lot of
                                data. This character set uses different codes to
                                ASCII so a PC couldn't directly 'talk' to one,
                                although it could if a special program was
                                written to allow them to talk.
                              </p>
                              <p>
                                It is unfortunate that there are two widely used
                                character sets in use. This situation has come
                                about because at one time, in the early days of
                                computer development, manufacturers tried to
                                make their own character sets the standard one
                                to use and a lot of different ones were
                                promoted. ASCII and EBCDIC emerged historically
                                together and now we must live with it!
                              </p>
                              <p>
                                <strong>
                                  Unicode and UCS (Unified Character Set) – ISO
                                  10646
                                </strong>
                                <br />
                                When we are talking about the ASCII or EBCDIC
                                codes we are viewing the world as a place where
                                everyone speaks and uses English, using the
                                characters and symbols we are all familiar with.
                                There is a problem!
                              </p>
                              <p>
                                Many languages do not use the 26 letters of the
                                English alphabet. There are literally thousands
                                of symbols used, for example, to write Chinese.
                                Then there are Japanese symbols, characters used
                                in the Russian alphabet, Greek, Thai, Runic,
                                Bengali, Tamil, Telugu, Arabic, Malay, Lao,
                                Khmer, Tibetan, Ethiopian, Gujarati, Cherokee,
                                Mongolian, Yi and the list goes on and on and
                                on. It goes further than that, however. There
                                are also many mathematics symbols in use all
                                over the world and all kinds of other symbols,
                                such as the scripts used by the writer Tolkien
                                (of Lord of the Rings fame)! And of course there
                                may be many new scripts and symbols added in the
                                future. If there is to be a way for users of
                                software to access the characters in any
                                language, and if we all want to access the
                                greatest possible range of symbols used in the
                                world, then clearly we are going to have to
                                think a little bit bigger than ASCII. This is
                                especially true for companies who do business
                                globally or who need to create multi-lingual
                                documents.
                              </p>
                              <p>
                                We have seen that ASCII is simply a list of 256
                                numbers (8 bits), each number being allocated
                                one of the characters or symbols that you can
                                see on the keyboard in front of you. We have to
                                do this because computers can only understand
                                numbers not characters. Unicode uses exactly the
                                same process as ASCII. It is a list of numbers,
                                each number being allocated a particular
                                character or symbol. However, Unicode is a much
                                bigger list than the 256 numbers available in
                                ASCII. In fact, the standard that defines
                                Unicode and UCS, called ISO 10646, uses 31 bits.
                                This gives about 2000 million codes. Unicode
                                only uses a subset of this however, using 16
                                bits to give about 65000 unique codes that have
                                been allocated to symbols.
                              </p>
                              <p>
                                Don’t be confused by the two common standards
                                ‘Unicode’ and ‘UCS’. They originally started out
                                as two different standards but the two
                                organisations saw the light and decided that one
                                system would be better for all concerned. They
                                are still separate standards but have become in
                                practical terms interchangeable. Also note that
                                Unicode has incorporated ASCII.
                              </p>
                              <p>
                                <strong>Unicode, HTML and web browsers</strong>
                                <br />
                                Have you ever written some HTML code for a
                                website? Suppose you want to display a special
                                symbol such as a trademark symbol on the
                                website. You would use the &amp;#8482 in your
                                code. This is because the Unicode symbol for the
                                trademark symbol, ™ is &amp;#8482. &amp;#916
                                will display the Greek letter delta. You can
                                easily find a Unicode reference for your website
                                by doing a search for ‘HTML Unicode’.
                              </p>
                              <p>
                                Another point to make about Unicode is that if
                                web browsers are to be used by many different
                                peoples from the entire world then they need to
                                understand more than just ASCII code. The latest
                                web browsers make use of Unicode and can
                                therefore be used universally. (You may need to
                                set up your web browser properly or install the
                                appropriate fonts if you are having problems
                                displaying Unicode characters - there is plenty
                                of help on the Internet).
                              </p>
                              <p>
                                <img
                                  src="images/97a8a2c0-c629-4c25-beea-055a695c6d71Unicode.JPG"
                                  alt
                                />
                              </p>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Codes_and_character_sets;
