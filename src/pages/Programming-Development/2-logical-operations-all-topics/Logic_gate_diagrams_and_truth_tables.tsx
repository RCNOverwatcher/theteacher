import React from "react";

function Logic_gate_diagrams_and_truth_tables() {
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
                                Logic gate diagrams and truth tables
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                We have seen how logic gates work and how to
                                represent them on paper. Now we can start to
                                putting the logic gates together, to build
                                complex logic diagrams. We can also see how
                                truth tables are an invaluable tool when trying
                                to understand what a logic diagram does. When
                                presented with any logic diagram, you should
                                always construct a truth table, that spells out
                                exactly what the output is after every gate.
                                That way, you will be able to work out what the
                                final output will be for all the different
                                permutations of inputs.
                              </p>

                              <p>
                                <strong>Example 1</strong>
                                <br />
                                Consider this logic diagram:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/30c8ac91-fa5a-4fd0-9c50-d8f983dfee8fANDNOT.GIF"
                                  alt="ANDNOT"
                                />
                              </p>
                              <p>
                                What is the output? The output from the AND gate
                                is true when both A and B are true. Otherwise,
                                the output is false. This then feeds into the
                                NOT gate. If the input into the NOT gate is
                                false, the output C is true. If the input to the
                                NOT gate is true, the output C is false.
                              </p>
                              <p>
                                Now this is starting to get complicated and we
                                only have two logic gates! Imaging if we had
                                hundreds connected together. This is where truth
                                tables become invaluable. Rather than trying to
                                work out what is going on in a logic diagram in
                                one go, and trying to keep track of what is
                                happening in our heads, we can use truth tables
                                to help, working out the logic at each stage in
                                the diagram.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/23a38613-c506-4229-b8cc-117c7a710abcANDNOTTT.GIF"
                                  alt="ANDNOTTT"
                                />
                              </p>
                              <p>
                                First of all, we work out the output for the AND
                                gate from the combinations of inputs. We create
                                a column for the results. We feed these results
                                into our NOT gate, producing yet another column
                                for these results. We now have a complete truth
                                table, which we can use to predict the output
                                for any combination of inputs.
                              </p>
                              <p>
                                <strong>Example 2</strong>
                                <br />
                                Consider this logic diagram:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/10502049-91da-4347-bd33-db5194dff98fNOTNOTAND.GIF"
                                  alt="NOTNOTAND"
                                  width="350"
                                  height="191"
                                />
                              </p>
                              <p>
                                What is the final output, C? We could try to
                                work it out in our heads, although it is easy to
                                get quickly confused. It would be better to
                                produce a truth table of the diagram. That way,
                                we can consider each part of the diagram in
                                steps.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/91b5f203-9cad-4680-ba85-5ea47adcbfcdNOTNOTANDTT.GIF"
                                  alt="NOTNOTANDTT"
                                />
                              </p>
                              <p>
                                We can look at Input A and then do NOT A. We can
                                then look at Input B and do NOT B. We can then
                                use the columns for NOT A and NOT B to do the
                                AND gate. This is the final output for this
                                logic diagram.
                              </p>
                              <p>
                                <strong>Example 3</strong>
                                <br />
                                Consider this more complex logic diagram:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/ba2f37cc-dd7f-4f70-9997-af4bf2d1b351AONA.GIF"
                                  alt="AONA"
                                />
                              </p>
                              <p>
                                Trying to work out what will happen for all of
                                the different permutations without using a truth
                                table will be difficult. When you do use a truth
                                table, however, it all becomes much easier.
                                Notice this time, however, that both Input A and
                                Input B are fed into two different logic gates
                                at the start of the diagram on the left. It
                                doesn't make any difference to producing the
                                truth table. We just do the logic for each gate
                                in turn as before.
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/66c27d88-eb9d-4193-8a82-1adbd65bdc6fAONATT.GIF"
                                  alt="AONATT"
                                />
                              </p>
                              <p>
                                <strong>Example 4</strong>
                                <br />
                                Consider this even more complex logic diagram:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/850d7337-8e9e-429d-923c-e7c0ccd874e4XOR.GIF"
                                  alt="XOR"
                                />
                              </p>
                              <p>
                                By using truth tables, we can see what the
                                output is for every permutation of inputs:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/4114bbd0-b358-4fb1-99c8-81619c45f28eXORTT.GIF"
                                  alt="XORTT"
                                />
                              </p>
                              <p>
                                You may have noticed that in Example 3 and
                                Example 4, the outputs were the same for
                                whatever combination of inputs was fed in. The
                                difference here is what logic gates were used to
                                create the logic diagram. It is entirely
                                possible to create the same outputs for the
                                given inputs by using different combinations of
                                logic gates.
                              </p>
                              <p>
                                <strong>Example 5</strong>
                                <br />
                                Suppose we have a diagram with three inputs.
                                With three inputs, there are a possible eight
                                different combinations of ones and zeros that
                                could be entered into the logic diagram. Here is
                                diagram that we need to produce a truth table
                                for:
                              </p>
                              <p>
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/672d898d-b8cc-4e77-98b2-2f48f29b619e3inputs.GIF"
                                  alt="3inputs"
                                />
                              </p>
                              <p>
                                The procedure is exactly the same. Firstly, we
                                will work out the number of possible
                                combinations of inputs of A, B and C, which we
                                have already said is eight. Then we will work
                                out the logic after each gate, and build up our
                                truth table until we get to the final output.
                                Our final truth table will look like this:
                              </p>
                              <p>
                                <img
                                  style="
                                margin: 10px auto;
                                vertical-align: middle;
                                display: block;
                              "
                                  src="images/82901fef-5e16-44e8-9bd3-7b9bc5a032d43inputstruth.GIF"
                                  alt="3inputstruth"
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

export default Logic_gate_diagrams_and_truth_tables;