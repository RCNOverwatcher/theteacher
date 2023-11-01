import React from "react";

function Half_adders() {
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
                              <h1 style="text-align: center">Half adders</h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                Computers need to be able to do maths on
                                numbers. We are going to look at the logic in a
                                circuit diagram that can add up bits. Before we
                                look at the circuit, however, we need to
                                understand how bits are added together and the
                                role of the carry bit.
                              </p>

                              <p class="NormalContent">
                                We are going to add two binary numbers. We start
                                at the least significant end of the number, the
                                right hand side.&nbsp;
                                <br />
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/97e0b735-4055-4e33-beab-0a8003a6f85dsum1.GIF"
                                  alt="sum1"
                                />
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <br />
                                The sum of 0 + 1 is clearly 1 but what is the
                                carry? In this case, you might think there isn't
                                one but when we are designing hardware, if we
                                decide there has to be a carry, then we always
                                need to have one, even if it is 0, as in this
                                case. We shall therefore carry 0 and show this
                                in a bracket in the next column at the top, like
                                this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/8f579841-8fa7-42c5-bc35-51d014087ff2sum2.GIF"
                                  alt="sum2"
                                />
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                Now we can add the next column. 0 + 1 + 1 is 10
                                in binary. The sum part of the addition is a 0
                                this time, but we had to move a 1 into the next
                                column. This is the carry. If you are confused
                                about this, think about when you add two denary
                                numbers together. If you add 6 and 8, for
                                example, the answer is 4 carry 1 or 14. We can
                                show the answer to our binary addition like
                                this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/f0fa83ed-9cd9-4192-8bc8-61601df601aesum3.GIF"
                                  alt="sum3"
                                />
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                1 + 1 + 0 is 10 in binary. The sum part of the
                                addition is a 0 again, and the carry is a 1
                                again. We can show that like this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/58c3e551-1aea-4484-81c5-e3aa311dd7b0sum4.GIF"
                                  alt="sum4"
                                />
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                Now we have 1 + 1 + 1 which is 11 in binary. The
                                sum part of the addition is a 1, and the carry
                                is a 1. We can show that like this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/a384a293-0681-48f9-9c51-e39781f2c5efsum5.GIF"
                                  alt="sum5"
                                />
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                This time, as we have come to the end of the
                                number, we will put the carry in a bracket just
                                to the left of the answer. If you convert the
                                original two numbers into denary, you can see
                                that the sum was 14 plus 11, and the answer was
                                25, which is the same as the answer in binary if
                                you include the carry bit as well. Generally
                                speaking, if we have two binary numbers, each of
                                which is X bits long, then the answer is either
                                X bits long without a carry bit, or X+1 bits
                                long if you include the carry bit.
                              </p>
                              <p class="NormalContent">
                                <strong>
                                  <img
                                    style="margin: 20px; float: left"
                                    src="images/1c4bbc96-1e08-400e-8b8e-55823023ee1fhalfaddertruthtable.GIF"
                                    alt="halfaddertruthtable"
                                  />
                                  The half adder
                                </strong>
                                <br />
                                The first thing to notice is that we are adding
                                up bits in columns. We started by adding just 2
                                bits, but then we had to add 3 bits together.
                                Suppose we had to add 35 bits together or 400
                                bits - we would quickly have a very complicated
                                logic diagram. It makes sense to design a
                                circuit that adds just 2 bits together, and then
                                just have lots of them if we need to add more
                                than two bits.
                              </p>
                              <p class="NormalContent">
                                Our circuit will therefore have just two inputs,
                                one for each bit we are going to add. We'll call
                                these A and B. It will also have two outputs,
                                one for the sum (S) and one for the carry (C).
                                This circuit is known as the half adder.
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                The truth table for the half adder is shown in
                                the table. If you look at it carefully, you
                                might notice a couple of very interesting
                                things!
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 60px"
                              >
                                <strong>
                                  1) The first thing is that the carry has an
                                  identical truth table to an AND gate. Both
                                  inputs must be a 1 for the output to be a 1,
                                  otherwise the output is a 0.
                                </strong>
                                <br />
                                <strong>
                                  2) The second interesting thing is that the
                                  truth table for the sum is the same as the
                                  truth table for XOR. Both inputs must be
                                  different for the output to be a 1, otherwise
                                  the output is a 0.&nbsp;
                                </strong>
                              </p>
                              <p class="NormalContent">
                                Armed with these two observations, we can now
                                design a logic diagram for a half adder!
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 20px; float: left"
                                  src="images/3d6ef1e0-9cb8-4a67-a394-083236ddaea6halfadder.GIF"
                                  alt="halfadder"
                                />
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  We will need two logic gates, an XOR and an
                                  AND gate. We need to connect them up as shown
                                  in the diagram. We then have 2 bits as inputs,
                                  called A and B. Both of these signals are fed
                                  into the two gates that make up the half adder
                                  circuit at the same time. The XOR gate will
                                  tell you what the sum of the two bits is
                                  whilst the AND gate will tell you what the
                                  carry is.&nbsp;
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 1.5">
                                  It is possible to construct a half adder using
                                  other combinations of gates. For example, you
                                  could make one out of just NAND gates or just
                                  NOR gates. If you are confident you understand
                                  the logic behind a half adder as explained
                                  here, you could use Google to find some of the
                                  alternative designs!
                                </span>
                                <span style="line-height: 1.5">&nbsp;</span>
                                &nbsp;
                              </p>
                              <p class="NormalContent">&nbsp;</p>
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

export default Half_adders;
