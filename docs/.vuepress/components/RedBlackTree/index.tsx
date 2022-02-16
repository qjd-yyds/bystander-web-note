import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tree',
  setup() {
    return () => (
      <>
        <div id="header">
          <h1>红黑树操作</h1>
        </div>
        <div id="algoControlSection">
          <table id="AlgorithmSpecificControls">
            <td>
              <input type="Text" value="" size={4} />
            </td>
            <td>
              <input type="Button" value="Insert" />
            </td>
            <td>
              <input type="Text" value="" size={4} />
            </td>
            <td>
              <input type="Button" value="Delete" />
            </td>
            <td>
              <input type="Text" value="" size={4} />
            </td>
            <td>
              <input type="Button" value="Find" />
            </td>
            <td>
              <input type="Button" value="Print" />
            </td>
            <td>
              <input type="checkbox" value="Show Null Leaves" />
              Show Null Leaves
            </td>
          </table>
        </div>
        {/* 动画界面 */}
        <canvas id="canvas" width="1000" height="500"></canvas>
        <div id="generalAnimationControlSection">
          <table id="GeneralAnimationControls">
            <td>
              <input type="Button" value="Skip Back" disabled />
            </td>
            <td>
              <input type="Button" value="Step Back" />
            </td>
            <td>
              <input type="Button" value="Pause" />
            </td>
            <td>
              <input type="Button" value="Step Forward" disabled />
            </td>
            <td>
              <input type="Button" value="Skip Forward" disabled />
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    <div>
                      <a href="#"></a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center">Animation Speed</td>
                </tr>
              </table>
            </td>
            <td> w:</td>
            <td>
              <input type="Text" value="1000" size={4} />
            </td>
            <td> h:</td>
            <td>
              <input type="Text" value="500" size={4} />
            </td>
            <td>
              <input type="Button" value="Change Canvas Size" />
            </td>
            <td>
              <input type="Button" value="Move Controls" />
            </td>
          </table>
        </div>
      </>
    )
  }
})
