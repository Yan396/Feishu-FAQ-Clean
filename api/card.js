export default async function handler(req, res) {
  res.status(200).json({
    "type": "interactive",
    "card": {
      "config": {
        "wide_screen_mode": true
      },
      "header": {
        "title": {
          "tag": "plain_text",
          "content": "销售 FAQ 菜单"
        }
      },
      "elements": [
        {
          "tag": "div",
          "text": {
            "tag": "lark_md",
            "content": "欢迎使用销售助手，请选择内容："
          }
        },
        {
          "tag": "action",
          "actions": [
            {
              "tag": "button",
              "text": {
                "tag": "plain_text",
                "content": "📘 客户案例"
              },
              "type": "default",
              "value": {
                "action": "cases"
              }
            }
          ]
        }
      ]
    }
  });
}
