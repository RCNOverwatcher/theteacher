import React from "react";

function Shift_functions___introduction() {
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
                                Shift functions - introduction
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />A &nbsp;shift function moves bits to the
                                left or the right. If the bits are shifted to
                                the left, the left-most bit drops away and a
                                zero is added to the right-most bit. If the bits
                                are shifted to the right, then the right-most
                                bit drops away and a zero is added to the
                                left-most bit.
                              </p>
                              <p class="NormalContent">
                                <strong>Arithmetic shift examples</strong>
                                <br />
                                15 as a byte in binary is 0000 1111 so if we
                                shift all the bits to the left by one place, we
                                get 0001 1110 or 30. If we shift 15 by two
                                places to the left, we get 0011 1100 or 60. If
                                we shift the bits in 15 three places to the
                                left, we get 120. If we shift them four places
                                to the left, we get 1111 0000 or 240. In Python,
                                you use <strong>&lt;&lt;</strong> to shift bits
                                to the left.
                                <strong>x &lt;&lt; y</strong> means shift the
                                bits in x, y places to the left. x
                                <strong>&gt;&gt;</strong> y means shift the bits
                                in the number x, y places to the right. Enter
                                this Python code and see what happens:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>x = 15</strong>
                                <br />
                                <strong>print ('x is', x)</strong>
                                <br />
                                <strong>
                                  print ('x shifted one place to the left is', x
                                  &lt;&lt; 1)
                                </strong>
                                <br />
                                <strong>
                                  print ('x shifted two places to the left is',
                                  x &lt;&lt; 2)
                                </strong>
                                <br />
                                <strong>
                                  print ('x shifted three places to the left
                                  is', x &lt;&lt; 3)
                                </strong>
                                <br />
                                <strong>
                                  print ('x shifted four places to the left is',
                                  x &lt;&lt; 4)
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Now bit shift the bits in 15 to the right:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>x = 15</strong>
                                <br />
                                <strong>print ('x is', x)</strong>
                                <br />
                                <strong>
                                  print ('x shifted one place to the left is', x
                                  &gt;&gt; 1)
                                </strong>
                                <br />
                                <strong>
                                  print ('x shifted two places to the left is',
                                  x &gt;&gt; 2)
                                </strong>
                                <br />
                                <strong>
                                  print ('x shifted three places to the left
                                  is', x &gt;&gt; 3)
                                </strong>
                                <br />
                                <strong>
                                  print ('x shifted four places to the left is',
                                  x &gt;&gt; 4)
                                </strong>
                              </p>
                              <p class="NormalContent">
                                <strong>Uses for bit shifts</strong>
                                <br />
                                Did you notice a pattern when you shifted bits
                                to the left? You should have seen that the
                                original number was multiplied by two with each
                                bit shift to the left. Moving the bits to the
                                right is the same as dividing by two, although
                                you can see the problem with rounding that
                                occured in this particular example! If we wanted
                                to divide 160 &nbsp;by 4, it can easily be done
                                by shift the bits two places to the right i.e.
                                in Python,
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  print ('160 divided by 4 is', 160 &gt;&gt; 2)
                                </strong>
                              </p>
                              <p class="NormalContent">
                                <strong>Logical bit operation examples</strong>
                                <br />
                                We can use logical bit operations as well.&nbsp;
                              </p>
                              <p class="NormalContent">
                                <strong>AND</strong>
                                <br />
                                If we wanted to logically AND corresponding
                                bits, then we can. For example, in Python,
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  print ('35 AND 2 is 0010 0011 AND 0000 0010 =
                                  ', 35 &amp; 2)
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Each bit in the number 35 is ANDed with the
                                corresponding bit in 2. According to the AND
                                truth table, if both bits are a one, then the
                                output is a one. If either bit is a zero, or
                                both bits are a zero, then the output is a zero.
                                This is a really useful way of applying a mask
                                to a number to see if that bit has been set or
                                not. In this case, we can apply the mask 0000
                                0010 to see if bit 1 (the second bit from the
                                right as we count from zero) has been set.
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>OR</strong>
                                <br />
                                If we wanted to logically OR corresponding bits,
                                then we can. For example, in Python,
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  print ('38 OR 19 is 0010 0110 OR 0001 0011 =
                                  ', &nbsp;38 | 19)
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                This should give you the answer 55 because each
                                bit in the number 38 is ORed with the
                                corresponding bit in 19. According to the OR
                                truth table, if either bit is a one, or both
                                bits are a one, then the output is a one. If
                                both bits are zero then the output is a
                                zero.&nbsp;
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-top: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>XOR</strong>
                                <br />
                                XOR is useful in cryptology. If we wanted to
                                logically XOR corresponding bits, then we can.
                                For example, in Python,
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-left: 30px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>
                                  print ('38 XOR 19 is 0010 0110 XOR 0001 0011 =
                                  ', &nbsp;38 ^ 19)
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                This should give you the answer 53 because each
                                bit in the number 38 is XORed with the
                                corresponding bit in 19. According to the XOR
                                truth table, if either bit is a one, then the
                                output is a one. If both bits are one or both
                                bits are zero then the output is a zero.&nbsp;
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                <strong>NOT</strong>
                                <br />
                                You can get the complement of a number using a
                                bitwaise operation. For example, the complement
                                of 60 (0011 1100) is 1100 0011, which is a 2s
                                complement number -128 + (64 + 2 + 1) = -61. We
                                can this this in Python:
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                              margin-left: 30px;
                            "
                              >
                                <strong>
                                  print('The complement of 60 (0011 1100) is',
                                  ~60)
                                </strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              >
                                Care needs to be taken with the complement. You
                                need to remember that you are working with 2s
                                complement numbers so the left-most digit is
                                always going to be negative. For example,
                                consider the complement of 147. You cannot
                                represent this in 8 bits if it is a 2s
                                complement number because the left most bit is
                                negative
                                <span style="line-height: 16.3636360168457px">
                                  (-128, 64, 32, 16, 8, 4, 2, 1)
                                </span>
                                . You need nine bits. 147 is therefore 0 1001
                                0011 and the complement is 1 0110 1100 and
                                again, this is a 2s complement number. This
                                gives us -256 + (64 + 32 + 8 + 4) = -148.
                              </p>
                              <p
                                class="NormalContent"
                                style="
                              margin-bottom: 10px;
                              line-height: 16.3636360168457px;
                            "
                              ></p>
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

export default Shift_functions___introduction;