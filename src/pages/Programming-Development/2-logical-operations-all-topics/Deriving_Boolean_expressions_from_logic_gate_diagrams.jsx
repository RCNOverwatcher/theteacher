import React from "react";

function Deriving_Boolean_expressions_from_logic_gate_diagrams() {
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
                                Deriving Boolean expressions from logic gate
                                diagrams
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                Sometimes, we need to be able to derive the
                                Boolean expression of a logic gate diagram. We
                                might want to do this, for example, so that we
                                can investigate simplifying the design. We will
                                look at some examples of this now.
                              </p>

                              <p class="NormalContent">
                                <strong>Example 1</strong>
                                <br />
                                Consider the following circuit gate diagram:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/a17cd2da-43b3-477b-b0b5-4596cbd3a9c2logic1.GIF"
                                  alt="logic1"
                                />
                              </p>
                              <p class="NormalContent">
                                The first thing to do is to split up the logic
                                gate diagram into more manageable parts.
                                Sometimes, there are a number of ways you can do
                                this. You should just divide up the diagram in
                                what you think is the best way and see what
                                happens!&nbsp;
                              </p>
                              <p class="NormalContent">
                                Next, you need to start on the left and work
                                your way through each part, working out what the
                                output is after each gate.&nbsp;
                              </p>
                              <p class="NormalContent">
                                After part 1, we have A.B and A + B<br />
                                After part 2, we have inverted A.B so we now
                                have
                                <span style="text-decoration: overline">
                                  A.B
                                </span>
                                <br />
                                After part 3, we have put the parts together in
                                an AND gate from part 2 and have
                              </p>
                              <p class="NormalContent">
                                (
                                <span
                                  style="
                                line-height: 16.3636360168457px;
                                text-decoration: overline;
                              "
                                >
                                  A.B
                                </span>
                                )(A + B)
                              </p>
                              <p class="NormalContent">
                                Let's draw out the truth table for this diagram,
                                just for fun:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/e699f13f-94d1-4a18-ad3b-e3019e4aa65alogictruth.GIF"
                                  alt="logictruth"
                                />
                              </p>
                              <p class="NormalContent">
                                You may have noticed from this truth table that
                                the output is exactly the same as an XOR gate.
                                In an XOR gate, you get an output if both input
                                signals are different. That's what we have here.
                              </p>
                              <p class="NormalContent">
                                We didn't have to produce the truth table for
                                the circuit diagram to see that all we needed to
                                use was an XOR gate. We could have used our
                                Boolean identities and rules. Let's do that now.
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  (
                                </span>
                                <span
                                  style="
                                line-height: 16.3636360168457px;
                                text-decoration: overline;
                              "
                                >
                                  A.B
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  )(A + B) = Q
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  Applying the De Morgan's rule that
                                  states&nbsp;
                                </span>
                                <span
                                  style="
                                line-height: 16.3636360168457px;
                                text-decoration: overline;
                              "
                                >
                                  XY&nbsp;
                                </span>
                                <strong style="line-height: 16.3636360168457px">
                                  ≡
                                </strong>
                                <span style="line-height: 16.3636360168457px">
                                  &nbsp;
                                </span>
                                <span
                                  style="
                                line-height: 16.3636360168457px;
                                text-decoration: overline;
                              "
                                >
                                  X
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  &nbsp;+&nbsp;
                                </span>
                                <span
                                  style="
                                line-height: 16.3636360168457px;
                                text-decoration: overline;
                              "
                                >
                                  Y
                                </span>
                                <span style="line-height: 16.3636360168457px">
                                  &nbsp;we get
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  (
                                  <span style="text-decoration: overline">
                                    A
                                  </span>
                                  +
                                  <span style="text-decoration: overline">
                                    B
                                  </span>
                                  )(A + B)
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  Expanding this out using the distributive
                                  rule, we get
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    A
                                  </span>
                                  .A +
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    A
                                  </span>
                                  .B +
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    B
                                  </span>
                                  .A +
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    B
                                  </span>
                                  .B &nbsp; &nbsp;
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  Using the rule A.
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    A
                                  </span>
                                  &nbsp;= 0 and the commutative rule, we can
                                  eliminate the first and last terms, so we are
                                  left with
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    A
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    .B +&nbsp;
                                  </span>
                                  <span
                                    style="
                                  line-height: 16.3636360168457px;
                                  text-decoration: overline;
                                "
                                  >
                                    B
                                  </span>
                                  <span style="line-height: 16.3636360168457px">
                                    .A = Q
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    Let's have a look at the truth table for
                                    this simplified Boolean equation:
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    <img
                                      style="vertical-align: middle"
                                      src="images/63fc8346-3fcf-481f-a893-73c9a9a93bcclogictruth2.GIF"
                                      alt="logictruth2"
                                    />
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                You can see that the output of this truth table
                                is the same as the previous truth table. Out
                                simplified Boolean expression must therefore be
                                equivalent to the original. Since we have
                                already identified the output as the output of
                                an XOR gate, we can replace the whole original
                                circuit with just this:
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/073ebbb5-56cb-4bcf-ab43-422a583835abxor2.GIF"
                                  alt="xor2"
                                />
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  and save a lot of money in components,
                                  complexity and construction!
                                  <br />
                                  <br />
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <strong style="line-height: 16.3636360168457px">
                                    Example 2
                                  </strong>
                                  <br style="line-height: 16.3636360168457px" />
                                  <span style="line-height: 16.3636360168457px">
                                    Consider the following logic gate diagram.
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    <img
                                      style="vertical-align: middle"
                                      src="images/02c749cf-36a7-46d6-ae68-9d52898e619clogicdiag2.GIF"
                                      alt="logicdiag2"
                                    />
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">&nbsp;</p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    We started by splitting up our diagram into
                                    parts.
                                    <br />
                                    We started on the left, and worked out what
                                    the logic expression was after each gate.
                                    <br />
                                    We continued doing this from left to right
                                    until we got to the final logic gate.
                                    <br />
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                <span style="line-height: 16.3636360168457px">
                                  <span style="line-height: 16.3636360168457px">
                                    This is a completely different design, yet
                                    purely by coincidence, we have again ended
                                    up with the logic for an XOR gate! There are
                                    always many different designs for a logic
                                    gate diagram that achieves a desired output.
                                    The trick is to find the simplest one. We
                                    would again replace the original design with
                                    just a single XOR gate.
                                    <br />
                                    <br />
                                  </span>
                                </span>
                              </p>
                              <p class="NormalContent">
                                <strong style="line-height: 16.3636360168457px">
                                  Example 3
                                </strong>
                                <br style="line-height: 16.3636360168457px" />
                                <span style="line-height: 16.3636360168457px">
                                  It doesn't matter how many inputs you have, or
                                  even if your circuit diagram includes NAND or
                                  NOR gates. Consider the following logic gate
                                  diagram.
                                </span>
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="vertical-align: middle"
                                  src="images/997d1c1d-4515-48e4-bea7-8984aa6dec13logicdia3.GIF"
                                  alt="logicdia3"
                                  width="600"
                                  height="299"
                                />
                                &nbsp;
                              </p>
                              <p class="NormalContent">
                                You can see that have followed exactly the same
                                procedure as before.
                              </p>
                              <p class="NormalContent">
                                a) Make sure that you understand the logic for
                                the NAND gate in the above diagram.
                                <br />
                                b) Study the output Boolean expression. Can you
                                see any opportunities for applying any laws you
                                know to simplify it?&nbsp;&nbsp;
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

export default Deriving_Boolean_expressions_from_logic_gate_diagrams;
