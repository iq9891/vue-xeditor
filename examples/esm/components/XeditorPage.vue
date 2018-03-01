<template>
  <div>
    <h2>编辑器的基本使用</h2>
    <div>
      <p>这是刚开始的数据: {{ data1 }}</p>
      <button @click="get">获取内容</button><span v-show="subData">提交内容为：{{subData}}</span>
    </div>
    <br>
    <br>
    <vue-xeditor :id="editorId1" v-model="data1" :className="{'editor-page': true}" uploadlink="http://shared-client.inner.evente.cn:30340/upload/upImg"></vue-xeditor>
    <br>
    <br>
    <p>基本源码</p>
    <pre>
      &lt;vue-xeditor :id="editorId1" v-model="data1" :className="{'editor-page': true}" uploadlink="http://shared-client.inner.evente.cn:30340/upload/upImg"&gt;&lt;/vue-xeditor&gt;
    </pre>
    <br>
    <br>
    <h2>编辑器的扩展配置</h2>
    <vue-xeditor id="editor2" v-model="data2" :config="conf"></vue-xeditor>
    <br>
    <br>
    <p>扩展源码</p>
    <pre>
      &lt;vue-xeditor id="editor2" v-model="data2" :config="conf"&gt;&lt;/vue-xeditor&gt;
    </pre>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>改变内容触发</td>
          <td>Function</td>
          <td>-</td>
        </tr>
        <tr>
          <td>text</td>
          <td>默认内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>className</td>
          <td>自定义的 class 名称。</td>
          <td>Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>id</td>
          <td>编辑器的 id</td>
          <td>String</td>
          <td>emeditor</td>
        </tr>
        <tr>
          <td>cdnjs</td>
          <td>xeditor 的 js 地址</td>
          <td>String</td>
          <td>https://cdn.xeditor.com/4.7.3/standard-all/xeditor.js</td>
        </tr>
        <tr>
          <td>config</td>
          <td>xeditor 的 自定义配置。 具体怎么配置，及<a href="https://www.kancloud.cn/iq9891/xeditor/500803" target="_blank">默认可参照</a></td>
          <td>Object</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h3>注册的方法</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>change</td>
          <td>改变触发的方法</td>
          <td>val</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: '<p>test</p>',
      data2: '<p>test data2</p>',
      editorId1: 'editor1',
      subData: '',
      conf: {
        image: {
          type: 'base64',
        },
  		},
    };
  },
  methods: {
    get() {
      this.subData = this.data1;
    },
  },
}
</script>

<style>
.editor-page {
  width: 60%;
  margin: 0 auto;
}
</style>
