> (async () => {
await snowi.relayMessage(
from,
{
interactiveMessage: {
header: {
hasMediaAttachment: true,
imageMessage: (await prepareWAMessageMedia({
image: { url: "https://files.catbox.moe/ywxojj.png" }
}, { upload: snowi.waUploadToServer })).imageMessage,
title: "",
subtitle: ""
},
body: { text: "" },
footer: { text: "" },
nativeFlowMessage: {
buttons: [
{},
{
name: "single_select",
buttonParamsJson: JSON.stringify({
icon: "REVIEW",
title: "Single Select",
sections: [
{
title: "This Category",
rows: [
{ header: "Category 1", title: "Dummy Category", id: "a" },
{ header: "Category 2", title: "Dummy Category", id: "b" }
]
}
]
})
},
{
name: "request_contact_info",
buttonParamsJson: JSON.stringify({})
}
],
messageParamsJson: JSON.stringify({
bottom_sheet: {
list_title: "Select Category",
button_title: "\0",
in_thread_buttons_limit: 1
}
}),
messageVersion: 1
},

bloksWidget: {
uuid: "b392eacf-f086-48b0-b096-965be19d343a",
type: "im_a2ui",
fallback: "\0",
data: JSON.stringify({
type: "im_a2ui",
title: "\0",
version: "v0.9",
createSurface: {
surfaceId: "starcore-widget=b392eacf-f086-48b0-b096-965be19d343a",
catalogId: "https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json",
components: [
{
id: "root",
component: "Column",
children: [
"header",
"profile_section",
"divider_02",
"stats_section",
"product_tabs_section",
"flagship_product_section",
"bottom_section",
"business_form_section",
"ecosystem_card_section",
"portfolio_list_section",
"div_two",
"action_button_section",
"choice_section"
]
},
{ "id": "div_two", "component": "Divider" },
{
id: "bottom_section",
component: "Column",
children: [
"carousel_section"
]
},
{
id: "choice_section",
component: "Column",
children: [
"e_filterable_chips",
"btn_primary"
]
},
{
id: "carousel_section",
component: "Column",
children: ["carousel_title", "carousel"]
},
{
id: "carousel_title",
component: "Text",
text: " ⟡ Description",
variant: "h3"
},
{
id: "carousel",
component: "List",
direction: "horizontal",
align: "start",
children: ["prod_card_1", "prod_card_2", "prod_card_3"]
},
// Card 1
{
id: "prod_card_1",
component: "Card",
child: "prod_card_1_col"
},
{
id: "prod_card_1_col",
component: "Column",
children: ["prod_1_img", "prod_1_name", "prod_1_price", "prod_1_btn"]
},
{
id: "prod_1_img",
component: "Image",
url: "https://files.catbox.moe/d20dky.png",
variant: "smallFeature",
fit: "cover"
},
{ id: "prod_1_name", component: "Text", text: "\0", variant: "h3" },
{ id: "prod_1_price", component: "Text", text: "\0", variant: "body" },
{
id: "prod_1_btn",
component: "Button",
variant: "primary",
child: "prod_1_btn_text",
action: { type: "open_url", url: "https://wa.me/6281234567890" }
},
{ id: "prod_1_btn_text", component: "Text", text: "ꪶ ⌖ ꫂ" },
// Card 2
{
id: "prod_card_2",
component: "Card",
child: "prod_card_2_col"
},
{
id: "prod_card_2_col",
component: "Column",
children: ["prod_2_img", "prod_2_name", "prod_2_price", "prod_2_btn"]
},
{
id: "prod_2_img",
component: "Image",
url: "https://files.catbox.moe/x9q086.png",
variant: "smallFeature",
fit: "cover"
},
{ id: "prod_2_name", component: "Text", text: "\0", variant: "h3" },
{ id: "prod_2_price", component: "Text", text: "\0", variant: "body" },
{
id: "prod_2_btn",
component: "Button",
variant: "primary",
child: "prod_2_btn_text",
action: { type: "open_url", url: "https://wa.me/6281234567890" }
},
{ id: "prod_2_btn_text", component: "Text", text: "ꪶ ⌖ ꫂ" },

// Card 3
{
id: "prod_card_3",
component: "Card",
child: "prod_card_3_col"
},
{
id: "prod_card_3_col",
component: "Column",
children: ["prod_3_img", "prod_3_name", "prod_3_price", "prod_3_btn"]
},
{
id: "prod_3_img",
component: "Image",
url: "https://files.catbox.moe/t68lht.png",
variant: "smallFeature",
fit: "cover"
},
{ id: "prod_3_name", component: "Text", text: "\0", variant: "h3" },
{ id: "prod_3_price", component: "Text", text: "\0", variant: "body" },
{
id: "prod_3_btn",
component: "Button",
variant: "primary",
child: "prod_3_btn_text",
action: { type: "open_url", url: "https://wa.me/6281234567890" }
},
{ id: "prod_3_btn_text", component: "Text", text: "ꪶ ⌖ ꫂ" },
{
id: "header",
component: "Text",
text: "𝐑𝐝𝐬̤̌𝐓𝐫𝐚ᤢͦ𝐕𝐚͢͝𝐝𝐨𝐬𝐌𝐚͈͠𝐤𝐞𝐫",
variant: "h1"
},
{
id: "profile_section",
component: "Column",
children: ["owner_banner", "owner_name_row", "owner_tagline"]
},
{
id: "owner_banner",
component: "Image",
url: "https://files.catbox.moe/g53zwy.png",
variant: "header",
fit: "cover"
},
{
id: "owner_name_row",
component: "Row",
children: ["owner_name", "verified_icon"],
justify: "start",
align: "center"
},
{
id: "owner_name",
component: "Text",
text: " ⟡ RDS - IMMUNE",
variant: "h2"
},
{
id: "verified_icon",
component: "Image",
url: "https://files.catbox.moe/pbcpbj.png",
variant: "icon",
fit: "contain"
},
{
id: "owner_tagline",
component: "Text",
text: "Yeah, my name is redsilence, this is an interactive discovery that can be said to be a hidden message with a complete version.",
variant: "caption"
},

{ id: "divider_02", component: "Divider" },
{
id: "stats_section",
component: "Row",
children: ["stat_sales_group", "stat_buyers_group", "stat_years_group"],
justify: "spaceBetween"
},
{
id: "stat_sales_group",
component: "Row",
children: ["stat_sales_icon", "stat_sales_text"],
justify: "start"
},
{
id: "stat_sales_icon",
component: "Image",
url: "https://files.catbox.moe/17fybm.png",
variant: "icon",
fit: "contain"
},
{ id: "stat_sales_text", component: "Text", text: "10K+ sales", variant: "caption" },
{
id: "stat_buyers_group",
component: "Row",
children: ["stat_buyers_icon", "stat_buyers_text"],
justify: "start"
},
{
id: "stat_buyers_icon",
component: "Image",
url: "https://files.catbox.moe/g61ndr.png",
variant: "icon",
fit: "contain"
},
{ id: "stat_buyers_text", component: "Text", text: "5K+ buyer", variant: "caption" },
{
id: "stat_years_group",
component: "Row",
children: ["stat_years_icon", "stat_years_text"],
justify: "start"
},
{
id: "stat_years_icon",
component: "Image",
url: "https://files.catbox.moe/14hjao.png",
variant: "icon",
fit: "contain"
},
{ id: "stat_years_text", component: "Text", text: "22 patner", variant: "caption" },
{
id: "product_tabs_section",
component: "Column",
children: ["product_tabs_title", "product_tabs"]
},
{
id: "product_tabs_title",
component: "Text",
text: "⟢ Description",
variant: "h3"
},
{
id: "product_tabs",
component: "Tabs",
tabs: [
{ title: "RDS", child: "tab_zeus_content" },
{ title: "rds", child: "tab_tsw_content" },
{ title: "tsw", child: "tab_rds_content" }
]
},
{
id: "tab_zeus_content",
component: "Column",
children: ["zeus_title", "zeus_desc"]
},
{ id: "zeus_title", component: "Text", text: "⟢ Description", variant: "h3" },
{
id: "zeus_desc",
component: "Text",
text: " Put your description here",
variant: "body"
},
{
id: "tab_tsw_content",
component: "Column",
children: ["tsw_title"]
},
{ id: "tsw_title", component: "Text", text: "TSW SCRIPT", variant: "h3" },
{
id: "tab_rds_content",
component: "Column",
children: ["rds_title", "rds_desc", "rds_price"]
},
{ id: "rds_title", component: "Text", text: "RDS IMMUNE SCRIPT", variant: "h3" },
{
id: "rds_desc",
component: "Text",
text: "Next-gen hidden message framework • Expose & exploit delivery • Private B2B only.",
variant: "body"
},
{ id: "rds_price", component: "Text", text: "Price range: $150 - $1500", variant: "caption" },
{
id: "flagship_product_section",
component: "Card",
child: "flagship_row"
},
{
id: "flagship_row",
component: "Row",
children: ["flagship_thumbnail", "flagship_info_col"],
justify: "start",
align: "center"
},
{
id: "flagship_thumbnail",
component: "Image",
url: "https://files.catbox.moe/heodoo.png",
variant: "smallFeature",
fit: "cover"
},
{
id: "flagship_info_col",
component: "Column",
children: ["flagship_title", "flagship_desc", "flagship_btn"]
},
{ id: "flagship_title", component: "Text", text: "BEST SELLER 2024", variant: "h3" },
{
id: "flagship_desc",
component: "Text",
text: "Hidden message framework full exploit lifetime update",
variant: "caption"
},
{
id: "flagship_btn",
component: "Button",
child: "flagship_btn_text",
action: { type: "open_url", url: "https://wa.me/6281234567890" }
},
{ id: "flagship_btn_text", component: "Text", text: "invest in" },
{
id: "business_form_section",
component: "Column",
children: [
"business_title",
"slider_budget"
]
},
{
id: "business_title",
component: "ChoicePicker",
label: "⟢ Description",
options: [
{ "label": "First option", "value": "option" },
{ "label": "Second option", "value": "second" },
{ "label": "Three option", "value": "three" }
],
value: ["option"],
filterable: false
},
{
id: "slider_budget",
component: "Slider",
label: " ► Budget user",
min: 50,
max: 1500000,
value: 500
},
{ id: "ecosystem_card_section", component: "Card", child: "ecosystem_lvl_1" },
{ id: "ecosystem_lvl_1", component: "Card", child: "ecosystem_lvl_2" },
{ id: "ecosystem_lvl_2", component: "Card", child: "ecosystem_content" },
{
id: "ecosystem_content",
component: "Column",
children: ["ecosystem_title", "ecosystem_body", "ecosystem_subtitle"]
},
{ id: "ecosystem_title", component: "Text", text: "⟢ Ecosystem", variant: "h3" },
{
id: "ecosystem_body",
component: "Text",
text: "Fill in your description here",
variant: "body"
},
{
id: "ecosystem_subtitle",
component: "Text",
text: "Second example description for your product",
variant: "caption"
},
{
id: "portfolio_list_section",
component: "Column",
children: ["portfolio_title", "portfolio_list"]
},
{
id: "portfolio_title",
component: "Text",
text: "⟢ Description",
variant: "h3"
},
{
id: "portfolio_list",
component: "List",
children: ["portfolio_1", "portfolio_2", "portfolio_3"]
},
{
id: "portfolio_1",
component: "Row",
children: ["portfolio_1_img", "portfolio_1_text"],
justify: "start",
align: "center"
},
{
id: "portfolio_1_img",
component: "Image",
url: "https://files.catbox.moe/ipjiw4.png",
variant: "icon",
fit: "cover"
},
{ id: "portfolio_1_text", component: "Text", text: "WhatsApp", variant: "body" },
{
id: "portfolio_2",
component: "Row",
children: ["portfolio_2_img", "portfolio_2_text"],
justify: "start",
align: "center"
},
{
id: "portfolio_2_img",
component: "Image",
url: "https://files.catbox.moe/oy3j19.png",
variant: "icon",
fit: "cover"
},
{ id: "portfolio_2_text", component: "Text", text: "Telegram", variant: "body" },
{
id: "portfolio_3",
component: "Row",
children: ["portfolio_3_img", "portfolio_3_text"],
justify: "start",
align: "center"
},
{
id: "portfolio_3_img",
component: "Image",
url: "https://files.catbox.moe/ysa4e9.png",
variant: "icon",
fit: "cover"
},
{ id: "portfolio_3_text", component: "Text", text: "InstaComunity", variant: "body" },
{
id: "action_button_section",
component: "Column",
children: ["action_title", "action_row_primary"]
},
{ id: "action_title", component: "Text", text: "⟢ Description", variant: "h3" },
{
id: "action_row_primary",
component: "Row",
children: ["btn_buy", "btn_join_channel", "btn_private_dm"],
justify: "spaceBetween"
},
{
id: "btn_buy",
component: "Button",
child: "btn_buy_text",
action: { type: "open_url", url: "https://wa.me/6281234567890" }
},
{ id: "btn_buy_text", component: "Text", text: "⟡ ⟡" },
{
id: "btn_join_channel",
component: "Button",
child: "btn_join_channel_text",
action: { type: "open_url", url: "https://whatsapp.com/channel/rds-immune" }
},
{ id: "btn_join_channel_text", component: "Text", text: "⟡ ⟡" },
{
id: "btn_private_dm",
component: "Button",
child: "btn_private_dm_text",
action: { type: "open_url", url: "https://wa.me/6281234567890" }
},
{ id: "btn_private_dm_text", component: "Text", text: "⟡ ⟡" },
{
id: "e_filterable_chips",
component: "ChoicePicker",
label: "⟢ Description",
options: [
{ label: "Python", value: "green" },
{ label: "Golang", value: "purple" },
{ label: "Laravel", value: "blue" }
],
value: ["green"],
displayStyle: "chips",
filterable: true
},
{
"id": "btn_primary",
"component": "Button",
"variant": "primary",
"child": "btn_primary_text",
"action": { "type": "open_url", "url": "https://www.whatsapp.com" }
},
{ "id": "btn_primary_text", "component": "Text", "text": "join our channel" },
]
}
})
},

contextInfo: {
isForwarded: true,
forwardingScore: 11111111,
expiration: 7777777777777777777777777776000,
//quotedMessage: { contactMessage: {} }
}
}
},
{}
);
})();
