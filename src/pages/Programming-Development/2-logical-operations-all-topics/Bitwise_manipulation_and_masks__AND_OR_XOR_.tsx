import React from "react";

function Bitwise_manipulation_and_masks__AND_OR_XOR_() {
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
                                Bitwise manipulation and masks (AND OR XOR)
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                Bitwise operations are similar to Boolean logic
                                operations except that they work on individual
                                bits in a byte rather than on whole codes or
                                characters. In this section, we are going to
                                look at the commonest operators and how they are
                                typically used.
                              </p>

                              <p class="NormalContent">
                                <strong>
                                  What bitwise operators are available?
                                </strong>
                              </p>
                              <table
                                style="width: 75%; background-color: #fbf499"
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td style="text-align: center; width: 15%">
                                      <strong>Operator</strong>
                                    </td>
                                    <td style="text-align: center; width: 15%">
                                      <strong>Symbol used</strong>
                                    </td>
                                    <td style="text-align: center; width: 70%">
                                      <strong>Description</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">AND</td>
                                    <td style="text-align: center">&amp;</td>
                                    <td>
                                      The AND operator compares 2 bits. If they
                                      are both 1, then the result is 1,
                                      otherwise the result is 0.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">OR</td>
                                    <td style="text-align: center">|</td>
                                    <td>
                                      The OR operator compares 2 bits. If either
                                      of them is a 1, or both of them is a 1,
                                      then the result is 1, otherwise the result
                                      is 0.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      EXCLUSIVE OR (XOR)
                                    </td>
                                    <td style="text-align: center">^</td>
                                    <td>
                                      The EXCLUSIVE OR operator compares 2 bits.
                                      If either of them is a 1, the result is 1.
                                      If they are both 0 or both 1, then the
                                      result is 0. (Both bits must be different
                                      for the result to be a 1.)
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      COMPLEMENT
                                    </td>
                                    <td style="text-align: center">~</td>
                                    <td>
                                      The COMPLEMENT operand simply inverts all
                                      the bits so all the ones become zeros and
                                      all the zeros become ones.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      SHIFT RIGHT
                                    </td>
                                    <td style="text-align: center">&gt;&gt;</td>
                                    <td>
                                      The SHIFT RIGHT operator shifts all the
                                      bits to the right by one position. The bit
                                      that was originally on the right is
                                      discarded. The new bit that appears on the
                                      left is set to 0. Each SHIFT RIGHT is the
                                      equivalent of dividing by 2.
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">
                                      SHIFT LEFT
                                    </td>
                                    <td style="text-align: center">&lt;&lt;</td>
                                    <td>
                                      The SHIFT LEFT operator shifts all the
                                      bits to the left by one position. The bit
                                      that was originally on the left is
                                      discarded. The new bit that appears on the
                                      right is set to 0. Each SHIFT LEFT is the
                                      equivalent of multiplying by 2.
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                <strong>
                                  Uses for bitwise operators, including clearing
                                  registers
                                </strong>
                                <br />
                                Bitwise operators have a number of uses. One of
                                the most important is to check the status of
                                'flags'. A flag is simply an indicator of
                                whether something is TRUE or FALSE or is used to
                                indicate whether something has happened or not.
                                Consider a single byte 0000 0000. This byte has
                                8 bits. Each of those bits could be used as a
                                flag. For example, suppose the computer
                                regularly checks the status of 8 pieces of
                                hardware in turn. Each piece of hardware can be
                                assigned a particular bit in this byte. If the
                                hardware is functioning correctly, the relavant
                                bit is made a 0 (we talk about 'resetting' a bit
                                when we make it 0). If there is a fault,
                                however, the flag for that piece of hardware is
                                set to 1. We can use bitwise operators to set
                                and reset bits, and we can use bitwise operators
                                to go through and check each bit in turn later
                                on, to see what value it is. We will see
                                examples of this later using 'masks' to test if
                                a bit has changed.
                              </p>
                              <p class="NormalContent">
                                We can use bitwise operators to perform some
                                Maths tasks, as SHIFT RIGHT has the effect on a
                                number of dividing it by 2. SHIFT LEFT has the
                                effect of multiplying it by 2. The shifting of
                                bits is also important in some areas of software
                                development. For example, it is used in the
                                algorithm known as MD5, which is used to verify
                                that a file has not been corrupted. Manipulating
                                bits is a very important area for Assembly
                                programmers, as they work on a register level. A
                                typical Assembly operation might involve doing
                                some Maths on two numbers. Each time any
                                calculation is done, individual flags held in
                                special registers are set to indicate whether
                                there was a remainder, whether the result was
                                negative, whether the result was invalid and
                                produced an overflow or underflow (because the
                                result couldn't be stored in the size of
                                variable assigned to hold the result) and so on.
                                We can then test these flags in turn, and do
                                different piece of code, depending on whether
                                there was a remainder, an invalid result and so
                                on.
                              </p>
                              <p class="NormalContent">
                                Another use of bitwise operators is to quickly
                                clear out a register. This can easily be
                                achieved by ANDing a 16-bit register with 0000
                                0000 0000 0000, for example.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  AND bitwise operator - both bits must be a 1
                                  for the result to be a 1, otherwise the result
                                  is a 0.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Example 1 &nbsp; 01011100 &amp; 11001110
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Data 1</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;2
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>AND result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                Example 2 &nbsp;00101010 &amp; 11101100
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;1
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data&nbsp;
                                        </strong>
                                        2
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>AND result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <strong>
                                  OR bitwise operator - Either bit must be a 1,
                                  or both bits must be a 1, for the result to be
                                  a 1, otherwise the result is a 0.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Example 3 &nbsp; 10001000 | 11000001
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;1
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;2
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>OR result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                Example 4 &nbsp;00010011 | 00000001
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Operator 1</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>Operator 2</strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>OR result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <strong>
                                  XOR bitwise operator - both bits must be
                                  different for the result to be a 1, otherwise
                                  the result is a 0.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Example 5 &nbsp; 10011110 ^ 00010001
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;1
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;2
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>XOR result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                Example 6 &nbsp;00001010 ^ 11001100
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;1
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>
                                        <strong
                                          style="
                                        font-family: Verdana, Arial, Helvetica,
                                          sans-serif;
                                        font-size: 11px;
                                        line-height: normal;
                                        text-align: center;
                                        background-color: #fbf499;
                                      "
                                        >
                                          Data
                                        </strong>
                                        &nbsp;2
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>XOR result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <strong>
                                  Complement bitwise operator - invert the bits!
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Example 7 &nbsp;~ 01111100
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                      background-color: #fbf499;
                                    "
                                      >
                                        Data
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>
                                        COMPLEMENT result
                                        <br />
                                      </strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                Example 8 &nbsp;~ 10100010
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                      background-color: #fbf499;
                                    "
                                      >
                                        Data
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>
                                        COMPLEMENT result
                                        <br />
                                      </strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <strong>
                                  SHIFT RIGHT bitwise operator - shift all the
                                  bits one place to the right. Discard the
                                  original LSB and replace the MSB with a 0.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Example 9 &nbsp; &gt;&gt; 10100011
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                      background-color: #fbf499;
                                    "
                                      >
                                        Data
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>SHIFT RIGHT result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                Example 10 &nbsp;&gt;&gt; 10011000
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                      background-color: #fbf499;
                                    "
                                      >
                                        Data
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>SHIFT RIGHT result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <strong>
                                  LEFT SHIFT bitwise operator -&nbsp;
                                  <strong>
                                    shift all the bits one place to the left.
                                    Discard the original MSB and replace the LSB
                                    with a 0.
                                  </strong>
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Example 11 &nbsp; &lt;&lt; 11000001
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                      background-color: #fbf499;
                                    "
                                      >
                                        Data
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>SHIFT LEFT result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                Example 12 &nbsp;&lt;&lt; 00101010
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong
                                        style="
                                      font-family: Verdana, Arial, Helvetica,
                                        sans-serif;
                                      font-size: 11px;
                                      line-height: normal;
                                      text-align: center;
                                      background-color: #fbf499;
                                    "
                                      >
                                        Data
                                      </strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>SHIFT LEFT result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <strong>
                                  Using masks to change bits and test bits
                                </strong>
                                <br />A mask is a bit pattern that has been
                                defined by a programmer, which allows specific
                                bits in a piece of data to be tested or altered.
                              </p>
                              <p class="NormalContent">
                                <strong>Setting bits to 1</strong>
                                <br />
                                If you need to turn on a specific bit, you can
                                do this using the OR bitwise operation and a
                                suitable mask. For example, if you need to turn
                                on Bit 4 and Bit 7 of a byte (remember that the
                                bit on the right hand side is Bit 0), you can
                                use the mask 1001 0000 and the OR bitwise
                                operation.
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>Mask</strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>&nbsp;OR Result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                <strong>Resetting bits to 0</strong>
                                <br />
                                You can't force a bit to be 0 using the OR
                                command. You can use the bitwise command AND
                                along with a suitable mask, however. For
                                example, suppose you wanted to reset Bits 0, 1
                                and 2 in a byte but leave all the other bits as
                                they were. You would use the mask 1111 1000
                                along with the AND bitwise operator.
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>Mask</strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>&nbsp;AND Result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                <strong>Checking a specific bit</strong>
                                <br />
                                You can easily test what a bit is using the AND
                                bitwise operator and a suitable mask. For
                                example, suppose you wanted to test Bit 2 of a
                                piece of data to see if it was a 0 or 1. You
                                would turn off all the other bits using the AND
                                bitwise operator, but test Bit 2 by ANDing it
                                with 1. The mask you would use in this case is
                                0000 0100 and here is an example of how it
                                works. In the first example, Bit 2 of the data
                                we want to test is a zero and ANDing it with 1
                                results in a 0.
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>Mask</strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>&nbsp;AND Result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                We can test the result now. If the result is a
                                zero as it is in this case, then Bit 2 in our
                                data was a 0.&nbsp;
                              </p>
                              <p class="NormalContent">
                                Now see what happens if Bit 2 in the previous
                                data was actually a 1 to start with. When you
                                AND a 1 with a 1, the result is a 1.
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>Mask</strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>&nbsp;AND Result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                As you can see, the result is now not zero
                                anymore. In this situation, it tells us that Bit
                                0 in the original piece of data must have been a
                                1 to start with.
                              </p>
                              <p class="NormalContent">
                                Testing bits like this is very important. Based
                                on the result of the test, we can branch off and
                                do different things in a program.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  Toggling bits (making a 1 bit into a 0 and
                                  making a 0 bit into a 1).
                                </strong>
                                <br />
                                We have seen how to turn bits on, and how to
                                turn them off but we haven't seen how to do this
                                at the same time. For this, we need the XOR
                                bitwise operator. Suppose we want to toggle bits
                                4, 5, 6 and 7 but leave Bits 0, 1, 2 and 3 in
                                whatever state they are in. The mask we would
                                need is 1111 0000 along with the XOR
                                operator.&nbsp;
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr style="background-color: #f6d0d0">
                                    <td style="width: 11%; text-align: center">
                                      7
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      6
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      5
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      4
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      3
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      2
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Bit position</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      1
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      0
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>Data</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>Mask</strong>
                                    </td>
                                  </tr>
                                  <tr style="background-color: #d5f1e9">
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>&nbsp;XOR Result</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                As you can see, the bits that we didn't want to
                                toggle stayed as they were. However the bits
                                that we did want to toggle were indeed flipped
                                over to the opposite state.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  An example of using bitwise operators to
                                  control how some text will be displayed
                                </strong>
                                <br />
                                Let us assume that we are going to control how
                                some text will be displayed. We are going to
                                define and use a single byte variable called
                                <strong>textVar</strong> to do this. We will
                                define each bit in the byte as follows:
                              </p>
                              <table
                                style="
                              height: 1px;
                              width: 75%;
                              background-color: #fbf499;
                            "
                                border="1"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td style="width: 11%; text-align: center">
                                      <strong>BOLD</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>ITALIC</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>UNDERLINE</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>BLINKING</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>STRIKE THROUGH</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>NOT USED</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>NOT USED</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>NOT USED</strong>
                                    </td>
                                    <td style="width: 11%; text-align: center">
                                      <strong>ATTRIBUTE</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">7</td>
                                    <td style="text-align: center">6</td>
                                    <td style="text-align: center">5</td>
                                    <td style="text-align: center">4</td>
                                    <td style="text-align: center">3</td>
                                    <td style="text-align: center">2</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">0</td>
                                    <td style="text-align: center">
                                      <strong>BIT POSITION</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="text-align: center">128</td>
                                    <td style="text-align: center">64</td>
                                    <td style="text-align: center">32</td>
                                    <td style="text-align: center">16</td>
                                    <td style="text-align: center">8</td>
                                    <td style="text-align: center">4</td>
                                    <td style="text-align: center">2</td>
                                    <td style="text-align: center">1</td>
                                    <td style="text-align: center">
                                      <strong>VALUE</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p class="NormalContent">
                                Just to remind you, a byte has typically 8 bits.
                                The bit on the left has the biggest value and is
                                worth 128. It is called the Most Significant Bit
                                (MSB) and its position in the byte is Bit 7
                                (because in computing, we start counting from
                                0). The bit on the right is the Least
                                Significant Bit (LSB) is Bit 0 and is worth 1.
                                When you work with bits, you need to be very
                                clear the number of the bit you are talking
                                about, its value and terms like MSB and LSB.
                              </p>
                              <p class="NormalContent">
                                To make the text bold, we could use this
                                instruction:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>textVar = 128</strong>
                              </p>
                              <p class="NormalContent">
                                because 128 is the bit pattern 1000 0000. This
                                turns the Bold attribute on and makes the text
                                bold.
                              </p>
                              <p class="NormalContent">
                                Now we can turn the Underline attribute on as
                                well, like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>textVar = 128 | 32</strong>
                              </p>
                              <p class="NormalContent">
                                This will do the bitwise operation 1000 0000 OR
                                0010 0000 which results in textVar being given
                                the value 1010 0000 and both the bold and
                                underline attributes are switched on.
                              </p>
                              <p class="NormalContent">
                                We could switch off the Bold attribute now.
                                Let's use XOR, like this:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>textVar = textVar ^ 128</strong>
                              </p>
                              <p class="NormalContent">
                                This takes what was in textVar and XORs it with
                                1000 0000. In other words, it does 1010 0000 XOR
                                1000 0000 and this results in 0010 0000, which
                                switches the bold attribute off but keeps the
                                underline one on.
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

export default Bitwise_manipulation_and_masks__AND_OR_XOR_;